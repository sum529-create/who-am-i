import { useEffect } from "react";
import Router from "./shared/Router"
import useAuthStore from "./zustand/authStore"

function App() {
  const {setToken} = useAuthStore();

  useEffect(() => {
    const storeToken = window.localStorage.getItem("token");
    if(storeToken){
      setToken(storeToken);
    }
  }, [])
  return (
    <>
      <Router/>
    </>
  )
}

export default App
