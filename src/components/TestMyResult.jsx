import { useNavigate } from "react-router-dom";
import { mbtiDescriptions } from "../utils/mbtiCalculator"
import Title from "./common/Title"
import ShareButton from "./common/ShareButton";

const TestMyResult = ({result, noUrl}) => {
  const navigate = useNavigate();

  const handleNavigateToResults = () => {
    navigate("/test-result-page");
  };

  return (
    <>
      <Title>
        테스트 결과: {result}
      </Title>
      <p className="text-large text-gray-700 mb-8">
        {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
      </p>
      <div className="flex gap-2">
        <ShareButton noUrl={noUrl}/>
        <button
          onClick={handleNavigateToResults}
          className="w-full py-4 bg-[var(--button-primary)] text-white rounded-xl 
                  font-medium hover:bg-[var(--button-hover)] transition-all 
                  duration-[var(--transition-normal)]"
        >
          결과 페이지로 이동하기
        </button>
      </div>
    </>
  )
}

export default TestMyResult