import { useMutation } from "@tanstack/react-query";
import { createTestResult } from "../api/testResults";

const useCreateTest = () => {
  return (
    useMutation({
      mutationFn: createTestResult,
      onSuccess: () => {

      },
      onError: (error) => {
        console.error("Failed to Create Test",error);
        throw error
      }
    })
  )
}

export default useCreateTest;