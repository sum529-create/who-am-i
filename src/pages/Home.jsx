import { Link } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const Home = () => {
  const {token} = useAuthStore()
  return (
    <div className="flex-1 bg-[var(--bg-primary)] flex flex-col items-center justify-center p-[var(--gap-lg)]">
      <div className="max-w-md w-full bg-white rounded-2xl p-10 
                    shadow-[var(--card-shadow)]
                    hover:shadow-[var(--card-shadow-hover)]
                    transition-all duration-[var(--transition-normal)]">
        <h1 className="text-[var(--title-large)] font-bold text-center mb-6 text-[var(--text-primary)]">
          MBTI 테스트
        </h1>
        <p className="text-[var(--text-large)] text-gray-600 text-center mb-10">
          당신의 특별한 성격 유형을 찾아보세요
        </p>
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