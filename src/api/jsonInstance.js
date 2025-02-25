import axios from "axios";

const jsonInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_JSON_API_URL,
  timeout: 5000,
});

export default jsonInstance;
