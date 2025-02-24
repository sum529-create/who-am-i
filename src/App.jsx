import { useEffect } from "react";
import Router from "./shared/Router"
import useAuthStore from "./zustand/authStore"

function App() {
  const {setToken} = useAuthStore();

  useEffect(() => {
    const storeToken = window.localStorage.getItem("accessToken");
    if(storeToken){
      setToken(storeToken);
    }
    if(window.Kakao){
      window.Kakao.init(import.meta.env.VITE_APP_KAKAO_API_KEY)
    }
  }, [])
  return (
    <>
      <Router/>
    </>
  )
}

export default App
