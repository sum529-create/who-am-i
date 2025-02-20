import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
  return (
    <>
      <Header/>
      <main className="flex flex-col bg-gray-100 items-center justify-center w-full min-h-screen box-border animate-fadeIn">
        <div className="w-full flex justify-center max-w-screen-xl relative mx-auto p-8 ">
          <Outlet/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Layout