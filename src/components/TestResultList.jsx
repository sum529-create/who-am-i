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
  
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error {error.message}</div>
  
  return (
    <ul className="flex gap-4 flex-col break-all">
      {testResultList?.filter(e => e.visibility === true || (e.visibility === false && e.userId === user.userId))
      .map(e => {
        return(
          <TestResultItem key={e.id} data={e} user={user}/>
        )
      })}
    </ul>
  )
}

export default TestResultList