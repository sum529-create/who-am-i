import axios from "axios";

/**
 * 사용자 정보 관련 API 인스턴스
 */
const authInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_AUTH_API_URL,
  timeout: 5000,
});

export default authInstance;
