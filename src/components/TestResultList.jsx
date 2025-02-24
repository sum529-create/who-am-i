import { useQuery } from "@tanstack/react-query"
import { getTestResults } from "../api/testResults"
import TestResultItem from "./TestResultItem"
import useAuthStore from "../zustand/authStore"
import Loading from "./common/Loading";
import Error from "./common/Error";

const TestResultList = () => {
  const {data:testResultList, isLoading, isError, error} = useQuery({
    queryKey: ['testResult'],
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
        {testResultList
          ?.filter(e => e.visibility === true || (e.visibility === false && e.userId === user.userId))
          .map(e => (
            <TestResultItem key={e.id} data={e} user={user}/>
          ))}
      </ul>
    </div>
  );
};

export default TestResultList