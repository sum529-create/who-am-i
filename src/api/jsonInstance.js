import axios from "axios";

/**
 * MBTI Test관련 API 인스턴스
 */
const jsonInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_JSON_API_URL,
  timeout: 5000,
});

export default jsonInstance;
