import { useQuery } from "@tanstack/react-query"
import { getTestResults } from "../api/testResults"
import TestResultItem from "./TestResultItem"
import useAuthStore from "../zustand/authStore"

const TestResultList = () => {
  const {data:testResultList, isLoading, isError, error} = useQuery({
    queryKey: ['testResult'],
    queryFn: getTestResults,
  })
  const {user} = useAuthStore();
  
  if(isLoading) return (
    <div className="w-full flex justify-center items-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
  
  if(isError) return (
    <div className="w-full text-center text-red-600 py-8">
      Error: {error.message}
    </div>
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