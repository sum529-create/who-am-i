import { useState } from "react";
import useAuthStore from "../zustand/authStore";
import { useEffect } from "react";
import useUpdateProfile from "../hooks/useUpdateProfile";

const Profile = () => {
  const { token } = useAuthStore();
  const {user} = useAuthStore()
  const [nickname, setNickname] = useState(user?.nickname || "")
  const [imgFile, setImgFile] = useState(user?.avatar || null);
  
  const {mutate} = useUpdateProfile();
  
  const fetchUserData = async() => {
    setNickname(user.nickname)
    setImgFile(user.avatar)
  }
  
  useEffect(() => {
    if(user){
      fetchUserData();
    }
  }, [user])

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleProfileImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0]
    if(file){
      setImgFile(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if(imgFile) formData.append("avatar", imgFile)
    if(nickname) formData.append("nickname", nickname)
    
    if(formData) mutate({formData, token})
  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            {
              typeof imgFile === "object"
              ? <div className="h-[200px] w-[200px] bg-slate-400 flex text-center justify-center items-center">이미지 수정중</div>
              : <img src={imgFile} alt="profile-img" />
            }
          </div>
          <div>
            <label>이미지</label>
            <input type="file" name="avatar" accept="image/*" onChange={e => handleProfileImage(e)} />
          </div>
          <div>
            <label>
              닉네임
            </label>
            <input value={nickname} name="nickname" onChange={handleNicknameChange} />
          </div>
          <button type="submit">
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;