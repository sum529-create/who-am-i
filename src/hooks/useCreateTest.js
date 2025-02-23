import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTestResult } from "../api/testResults";

const useCreateTest = () => {
  const queryClient = useQueryClient();
  return (
    useMutation({
      mutationFn: createTestResult,
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['testResult']})
      },
      onError: (error) => {
        console.error("Failed to Create Test",error);
        throw error
      }
    })
  )
}

export default useCreateTest;