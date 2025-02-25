import { Link } from "react-router-dom";
import useAuthStore from "../zustand/authStore";
import Title from "../components/common/Title";

const Home = () => {
  const {token} = useAuthStore()
  return (
    <div className="flex-1 bg-[var(--bg-primary)] flex flex-col items-center justify-center p-[var(--gap-lg)]">
      <div className="max-w-md w-full bg-white rounded-2xl p-10 
                    shadow-[var(--card-shadow)]
                    hover:shadow-[var(--card-shadow-hover)]
                    transition-all duration-[var(--transition-normal)]">
        <Title>
          MBTI 테스트
        </Title>
        <p className="text-large text-gray-600 text-center mb-10">
          당신의 특별한 성격 유형을 찾아보세요
        </p>
        <div className="mb-6 text-center text-gray-700 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--button-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>16가지 성격 유형 분석</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--button-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="17" y1="11" x2="23" y2="11"></line>
            </svg>
            <span>자기 이해와 인간관계 통찰</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--button-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22 a 8 8 0 0 0 8-8V7l-8-5-8 5v7a8 8 0 0 0 8 8z"></path>
              <path d="M12 22v-9"></path>
              <path d="m16 16-4-4-4 4"></path>
            </svg>
            <span>개인의 강점과 성장 방향 제시</span>
          </div>
        </div>
        {!token ? (
          <Link 
            to="/login"
            className="block w-full text-center py-4 rounded-xl font-medium
                     bg-[var(--button-primary)] text-white
                     hover:bg-[var(--button-hover)]
                     active:scale-[0.98]
                     transition-all duration-[var(--transition-normal)]"
          >
            시작하기
          </Link>
        ) : (
          <Link 
            to="/test-page"
            className="block w-full text-center py-4 rounded-xl font-medium
                     bg-[var(--button-primary)] text-white
                     hover:bg-[var(--button-hover)]
                     active:scale-[0.98]
                     transition-all duration-[var(--transition-normal)]"
          >
            테스트 시작하기
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home