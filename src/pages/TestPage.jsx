import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import useCreateTest from "../hooks/useCreateTest";
import useAuthStore from "../zustand/authStore";
import Title from "../components/common/Title";
import TestMyResult from "../components/TestMyResult";

const TestPage = () => {
  const [result, setResult] = useState(null);
  const {mutate} = useCreateTest()
  const {user} = useAuthStore()
  
  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);

    const testResultData = {
      userId : user.userId,
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
          <TestMyResult result={result}/>
        )}
      </div>
    </div>
  );
};

export default TestPage;
