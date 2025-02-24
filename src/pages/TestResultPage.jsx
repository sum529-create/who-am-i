import Title from "../components/common/Title";
import TestResultList from "../components/TestResultList"

const TestResultPage = () => {

  return (
    <div className="flex-1 bg-[var(--bg-primary)] p-[var(--gap-lg)]">
      <div className="bg-white rounded-2xl p-8 shadow-[var(--card-shadow)]">
        <Title>
          테스트 결과
        </Title>
        <TestResultList/>
      </div>
    </div>
  );
}

export default TestResultPage