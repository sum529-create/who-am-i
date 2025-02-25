import { useEffect } from "react";
import Router from "./shared/Router"
import useAuthStore from "./zustand/authStore"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {setToken} = useAuthStore();

  useEffect(() => {
    const storeToken = window.localStorage.getItem("accessToken");
    if(storeToken){
      setToken(storeToken);
    }
    if(window.Kakao && !window.Kakao.isInitialized()){
      window.Kakao.init(import.meta.env.VITE_APP_KAKAO_API_KEY)
    }
  }, [])
  return (
    <>
      <Router/>
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          zIndex: 9999,
          width: 'auto',
          maxWidth: '400px',
          wordBreak: 'keep-all',
          fontSize: '14px'
        }}
        toastStyle={{
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '12px 16px'
        }}
      />
    </>
  )
}

export default App
