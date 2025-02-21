import React, { useState } from "react";
import { getUserProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";
import { useEffect } from "react";


const Profile = () => {
  const { user, setUser, token } = useAuthStore();
  const [nickname, setNickname] = useState(user?.nickname || "");
  
  useEffect(() => {
    const fetchUserData = async() => {
      const res = await getUserProfile(token)
      setUser(res)
      setNickname(res.nickname)
    }
    if(token){
      fetchUserData();
    }
  }, [token])

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
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