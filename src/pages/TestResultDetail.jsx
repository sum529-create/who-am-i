import { useParams } from "react-router-dom"
import TestMyResult from "../components/TestMyResult"
import { useQuery } from "@tanstack/react-query";
import { getTestResultById } from "../api/testResults";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import { QUERY_KEYS } from "../constants/queryKeys";

const TestResultDetail = () => {
  const {resultId} = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: QUERY_KEYS.TEST_RESULT_DETAIL(resultId),
    queryFn: () => getTestResultById(resultId) 
  });
  
  if(isLoading) return <Loading/>

  if(isError) return <Error message={error}/>
  
  return (
    <div className="flex-1 bg-[var(--bg-primary)] flex flex-col items-center justify-center p-[var(--gap-lg)]">
      <div className="max-w-2xl w-full bg-white rounded-2xl p-10 shadow-[var(--card-shadow)]">
        <TestMyResult result={data.mbtiResult} resultId={resultId}/>
      </div>
    </div>

  )
}

export default TestResultDetail