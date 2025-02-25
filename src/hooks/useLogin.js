import { useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/auth";
import { toast } from "react-toastify";

/**
 * useLogin
 * 로그인 처리를 해주는 mutation 관리
 * @returns {UseMutationResult} - 로그인 처리 뮤테이션 객체
 */
const useLogin = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    /**
     * 로그인 처리를 하는 함수
     * @function
     */
    mutationFn: login,
    onSuccess: (data) => {
      if (data.success) {
        setToken(data.accessToken);
        setUser({
          userId: data.userId,
          nickname: data.nickname,
          avatar: data.avatar,
        });
        queryClient.invalidateQueries(["user"]);
        queryClient.setDefaultOptions({
          queries: {
            staleTime: 3600 * 1000,
          },
        });
        navigate("/");
      }
    },
    onError: (error) => {
      toast.error(
        `로그인에 실패했습니다. 다시 시도해주세요.\n${
          error?.response?.data?.message || "알 수 없는 오류가 발생했습니다."
        }`
      );
    },
  });
};

export default useLogin;
