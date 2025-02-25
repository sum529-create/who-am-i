import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTestResult } from "../api/testResults";
import { QUERY_KEYS } from "../constants/queryKeys";
import useAuthStore from "../zustand/authStore";

/**
 * useCreateTest
 * 새로운 테스트 결과를 생성하는 mutation 관리
 * @returns {UseMutationResult} - 테스트 생성 뮤테이션 객체
 */
const useCreateTest = () => {
  const queryClient = useQueryClient();
  const { setSelTestId } = useAuthStore();

  return useMutation({
    /**
     * 테스트 결과를 생성하는 함수
     * @function
     */
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
