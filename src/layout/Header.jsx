import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [auth, setAuth] = useState(false);
  return (
    <header className="w-full h-[60px] bg-sky-600 text-[#FFF] flex items-center justify-center shadow-md sticky top-0 z-10">
      <nav className="max-w-screen-xl w-full h-full flex items-center justify-between px-8 sm:px-4">
        <Link to="/" className="text-4xl font-extrabold flex items-center cursor-pointer text-[#efefef] italic">
          Who Am I
        </Link>
        <div className="flex justify-center gap-4 items-center cursor-pointer text-[#e7e7e7]">
          {auth? 
            <Link to="/login">
              로그인
            </Link>
          :
            <>
              <Link to="/profile">
                프로필
              </Link>
              <Link to="/test-page">
                테스트
              </Link>
              <Link to="/test-result-page">
                결과보기
              </Link>
              <Link className="font-normal py-2 px-4 rounded-full transition-all bg-[#c8c8c8] text-[#383838] hover:bg-[#4ba17d] hover:text-white">
                로그아웃
              </Link>
            </>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header