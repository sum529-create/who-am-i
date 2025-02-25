import { useQuery } from "@tanstack/react-query"
import { getTestResults } from "../api/testResults"
import TestResultItem from "./TestResultItem"
import useAuthStore from "../zustand/authStore"
import Loading from "./common/Loading";
import Error from "./common/Error";
import { QUERY_KEYS } from "../constants/queryKeys";

const TestResultList = () => {
  const {data:testResultList, isLoading, isError, error} = useQuery({
    queryKey: QUERY_KEYS.TEST_RESULT,
    queryFn: getTestResults,
  })
  const {user} = useAuthStore();
  
  if(isLoading) return (
    <Loading/>
  );
  
  if(isError) return (
    <Error message={error.message}/>
  );
  return (
    <div className="w-full">
      <ul className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testResultList.length > 0 ? 
          testResultList?.filter(e => e.visibility === true || (e.visibility === false && e.userId === user.userId))
          .map(e => (
            <TestResultItem key={e.id} data={e} user={user}/>
          ))
          : (<li className="col-[span_3] text-center">업로드 된 테스트가 없습니다.</li>)
        }
      </ul>
    </div>
  );
};

export default TestResultList