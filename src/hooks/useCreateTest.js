import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTestResult } from "../api/testResults";
import { QUERY_KEYS } from "../constants/queryKeys";

const useCreateTest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TEST_RESULT });
    },
    onError: (error) => {
      console.error("Failed to Create Test", error);
      throw error;
    },
  });
};

export default useCreateTest;
