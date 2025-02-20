import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center flex-1">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          MBTI 성격 유형 테스트
        </h1>
        <p className="text-gray-600 text-center mb-8">
          나의 MBTI 유형을 알아보세요!
        </p>
        <Link to="/login">
          로그인하기
        </Link>
      </div>
    </div>
  );
};

export default Home