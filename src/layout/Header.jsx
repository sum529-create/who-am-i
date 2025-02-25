import { Link } from "react-router-dom"
import useAuthStore from "../zustand/authStore"

const Header = () => {
  const {token, logout} = useAuthStore();
  
  return (
    <header className="w-full h-[var(--header-height-mobile)] sm:h-[var(--header-height-desktop)] 
                       bg-[var(--header-bg)] text-[var(--header-text)] 
                       flex items-center justify-center shadow-lg sticky top-0 z-10">
      <nav className="max-w-screen-xl w-full h-full flex items-center justify-between px-4 sm:px-8">
        <Link to="/" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold flex items-center cursor-pointer tracking-wide">
          Who Am I
        </Link>
        <div className="flex justify-center gap-1 sm:gap-2 items-center text-sm sm:text-base">
          {!token ? 
            <>
              <Link to="/login" className="px-2 hover:text-[var(--header-text-hover)] transition-colors">
                로그인
              </Link>
              <Link to="/signup" className="px-2 hover:text-[var(--header-text-hover)] transition-colors">
                회원가입
              </Link>
            </>
            :
            <>
              <Link to="/profile" className="px-2 hover:text-[var(--header-text-hover)] cursor-pointer transition-colors">
                프로필
              </Link>
              <Link to="/test-page" className="px-2 hover:text-[var(--header-text-hover)] cursor-pointer transition-colors">
                테스트
              </Link>
              <Link to="/test-result-page" className="px-2 hover:text-[var(--header-text-hover)] cursor-pointer transition-colors whitespace-nowrap">
                결과보기
              </Link>
              <button 
                onClick={logout} 
                className="text-sm font-normal py-1.5 sm:py-2 px-3 sm:px-4 rounded-full transition-all 
                         bg-[var(--header-button-bg)] text-[var(--header-button-text)]
                         hover:bg-[var(--header-button-hover)]
                         shadow-sm hover:shadow-md"
              >
                로그아웃
              </button>
            </>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header;