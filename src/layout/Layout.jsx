import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import useAuthStore from "../zustand/authStore"
import useUser from "../hooks/useUser"
import { useEffect } from "react"

const Layout = () => {
  const {user:storeUser, setUser} = useAuthStore();
  const {data:userData} = useUser();
  const currentUser = storeUser || userData;

  useEffect(() => {
    if(userData && !storeUser){
      console.log(userData);
      
      setUser({
        userId: userData.id,
        nickname: userData.nickname,
        avatar: userData.avatar
      })
    }
  },[userData])

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1 bg-[var(--bg-primary)] flex flex-col">
        <div className="flex justify-center items-center flex-1 w-full max-w-screen-xl mx-auto p-4 sm:p-8">
          <Outlet context={currentUser}/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout