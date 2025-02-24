import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { useNavigate } from "react-router-dom";
import useCreateTest from "../hooks/useCreateTest";
import useAuthStore from "../zustand/authStore";
import Title from "../components/common/Title";

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const {mutate} = useCreateTest()
  const {user} = useAuthStore()
  
  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);

    const testResultData = {
      userId : user.id,
      nickname: user.nickname,
      avatar: user.avatar,
      createdAt: new Date().toLocaleString(),
      visibility: true,
      description: mbtiDescriptions[mbtiResult],
      mbtiResult
    }
    
    mutate(testResultData)
    setResult(mbtiResult);
  };

  const handleNavigateToResults = () => {
    navigate("/test-result-page");
  };

  return (
    <div className="flex-1 bg-[var(--bg-primary)] flex flex-col items-center justify-center p-[var(--gap-lg)]">
      <div className="max-w-2xl w-full bg-white rounded-2xl p-10 shadow-[var(--card-shadow)]">
        {!result ? (
          <>
            <Title>
              MBTI 테스트
            </Title>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <Title>
              테스트 결과: {result}
            </Title>
            <p className="text-large text-gray-700 mb-8">
              {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full py-4 bg-[var(--button-primary)] text-white rounded-xl 
                      font-medium hover:bg-[var(--button-hover)] transition-all 
                      duration-[var(--transition-normal)]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
