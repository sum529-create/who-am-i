import { toast } from "react-toastify";
import useAuthStore from "../zustand/authStore";
import authInstance from "./authInstance";

/**
 * 사용자 회원가입 요청
 * @param {Object} userData - 회원가입할 사용자 정보
 * @param {string} userData.id - 사용자 아이디
 * @param {string} userData.password - 사용자 비밀번호
 * @param {string} userData.nickname - 사용자 닉네임
 * @returns {Promise<Object>} - 회원가입 응답 데이터
 * @returns {Error} - 회원가입 요청 실패 시 에러 발생
 */
export const register = async (userData) => {
  try {
    const response = await authInstance.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch userData", error);
    throw error;
  }
};

/**
 * 사용자 로그인 요청
 * @param {Object} userData - 로그인 할 사용자 정보
 * @param {string} userData.id - 사용자 아이디
 * @param {string} userData.password - 사용자 비밀번호
 * @returns {Promise<Object>} - 로그인 응답 데이터
 * @returns {Error} - 로그인 요청 실패 시 에러 발생
 */
export const login = async (userData) => {
  try {
    const response = await authInstance.post("/login", userData);
    return response.data;
  } catch (error) {
    console.error("Failed to login", error);
    throw error;
  }
};

/**
 * 사용자 프로필 데이터 요청
 * @param {string} token - 사용자 인증 토큰
 * @returns {Promise<Object>} - 프로필 정보 응답 데이터
 * @returns {Error} - 프로필 정보 요청 실패 시 에러 발생
 */
export const getUserProfile = async (token) => {
  const { logout } = useAuthStore.getState();
  try {
    const response = await authInstance.get("/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.data.message.includes("토큰")) {
      toast.error("세션이 만료되었습니다.\n다시 로그인해주세요!");
      logout();
    } else {
      toast.error("프로필 정보를 불러오지 못했습니다.");
    }
    console.error("Failed to get user profile", error);
    throw error;
  }
};

/**
 * 사용자 프로필 업데이트 요청
 * @param {FormData} formData - 업데이트 할 사용자 프로필 데이터
 * @param {string} token - 사용자 인증 토큰
 * @returns {Promise<Object>} - 업데이트 된 사용자의 프로필 데이터
 * @returns {Error} - 사용자 프로필 응답 실패 시 에러 발생
 */
export const updateProfile = async (formData, token) => {
  const { logout } = useAuthStore.getState();
  try {
    const response = await authInstance.patch("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.data.message.includes("토큰")) {
      toast.error("세션이 만료되었습니다.\n다시 로그인해주세요!");
      logout();
    } else {
      toast.error("프로필 정보를 업데이트하지 못했습니다.");
    }
    console.error("Failed to update profile", error);
    throw error;
  }
};
