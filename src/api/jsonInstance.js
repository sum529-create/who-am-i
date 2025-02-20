import axios from "axios";

const jsonInstance = axios.create({
  baseURL: 'http://localhost:5000/testResults',
  timeout: 5000
})

export default jsonInstance;