import axios from "axios"

const authInstance = axios.create({
  baseURL: 'https://www.nbcamp-react-auth.link',
  timeout: 5000
})

export default authInstance;