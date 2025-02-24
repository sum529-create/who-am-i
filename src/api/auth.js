import { toast } from 'react-toastify';
import useAuthStore from '../zustand/authStore';
import authInstance from './authInstance';

export const register = async (userData) => {
  try {
    const response = await authInstance.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch userData", error);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await authInstance.post("/login", userData);
    return response.data
  } catch (error) {
    console.error("Failed to login", error);
    throw error
  }
};

export const getUserProfile = async (token) => {
  const {logout} = useAuthStore.getState();
  try {
    const response = await authInstance.get("/user",  {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if(error.response.data.message.includes("토큰")){
      toast.error('세션이 만료되었습니다. 다시 로그인해주세요!')
      logout()
    } else {
      toast.error('프로필 정보를 불러오지 못했습니다.');
    }
    console.error("Failed to get user profile", error);
    throw error
  }
};

export const updateProfile = async (formData, token) => {
  const {logout} = useAuthStore.getState();
  try {
    const response = await authInstance.patch("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    if(error.response.data.message.includes("토큰")){
      toast.error('세션이 만료되었습니다. 다시 로그인해주세요!')
      logout()
    } else {
      toast.error('프로필 정보를 업데이트하지 못했습니다.');
    }
    console.error("Failed to update profile", error);
    throw error
  }
};