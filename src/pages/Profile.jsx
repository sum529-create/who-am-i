import { useState } from "react";
import useAuthStore from "../zustand/authStore";
import { useEffect } from "react";
import useUpdateProfile from "../hooks/useUpdateProfile";
import Title from "../components/common/Title";
import { useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";

const Profile = () => {
  const { token, user, setUser } = useAuthStore();
  const [nickname, setNickname] = useState(user?.nickname || "")
  const [imgFile, setImgFile] = useState(user?.avatar || null);
  const queryClient = useQueryClient();
  const {mutate} = useUpdateProfile();
  const fileInputRef = useRef(null)
  
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
    
    if(formData) mutate({formData, token}, {
      onSuccess: (data) => {
        setNickname(data.nickname)
        setImgFile(data.avatar)
        setUser({
          userId: data.id,
          avatar: data.avatar,
          nickname: data.nickname
        })
      if(fileInputRef.current){
        fileInputRef.current.value = ""
      }
        queryClient.invalidateQueries({queryKey:['user']})
      }
    })
  };

  return (
    <div className="flex-1 bg-[var(--bg-primary)] flex flex-col items-center justify-center p-[var(--gap-lg)]">
      <div className="max-w-md w-full bg-white rounded-2xl p-10 shadow-[var(--card-shadow)]">
        <Title>
          프로필 수정
        </Title>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center mb-8">
            {typeof imgFile === "object" ? (
              <div className="h-[200px] w-[200px] bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                이미지 수정중
              </div>
            ) : (
              <img src={imgFile} alt="profile-img" className="h-[200px] w-[200px] rounded-full object-cover" />
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">이미지</label>
            <input 
              type="file" 
              name="avatar" 
              accept="image/*" 
              ref={fileInputRef}
              onChange={handleProfileImage}
              className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl
                      file:border-0 file:bg-[var(--button-primary)] file:text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">닉네임</label>
            <input 
              value={nickname} 
              name="nickname" 
              onChange={handleNicknameChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                      focus:ring-2 focus:ring-[var(--text-primary)] focus:border-transparent"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-[var(--button-primary)] text-white rounded-xl 
                    font-medium hover:bg-[var(--button-hover)] transition-all 
                    duration-[var(--transition-normal)] mt-8"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;