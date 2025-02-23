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
      setUser(userData)
    }
  },[userData])

  return (
    <>
      <Header/>
      <main className="flex flex-col bg-gray-100 items-center justify-center w-full min-h-screen box-border animate-fadeIn">
        <div className="w-full flex justify-center max-w-screen-xl relative mx-auto p-8 ">
          <Outlet context={currentUser}/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Layout