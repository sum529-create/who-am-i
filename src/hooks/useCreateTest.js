import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTestResult } from "../api/testResults";
import { QUERY_KEYS } from "../constants/queryKeys";
import useAuthStore from "../zustand/authStore";

const useCreateTest = () => {
  const queryClient = useQueryClient();
  const { setSelTestId } = useAuthStore();
  return useMutation({
    mutationFn: createTestResult,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TEST_RESULT });

      setSelTestId(data.id);
    },
    onError: (error) => {
      console.error("Failed to Create Test", error);
      throw error;
    },
  });
};

export default useCreateTest;
