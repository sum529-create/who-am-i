import axios from "axios";

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_AUTH_API_URL,
  timeout: 5000,
});

export default authInstance;
