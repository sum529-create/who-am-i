import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";
import { QUERY_KEYS } from "../constants/queryKeys";

/**
 * useUser
 * 사용자 정보 요청 결과를 생성하는 mutation 관리
 * @returns {UseMutationResult} - 사용자 정보 요청 뮤테이션 객체
 */
const useUser = () => {
  const { token, setUser } = useAuthStore();

  return useQuery({
    queryKey: QUERY_KEYS.USER,
    /**
     * 사용자 정보를 요청하는 함수
     * @function
     */
    queryFn: () => getUserProfile(token),
    onSuccess: (data) => {
      setUser({
        userId: data.userId,
        nickname: data.nickname,
        avatar: data.avatar,
      });
    },
    onError: (error) => {
      console.error("데이터 가져오기 실패!", error);
    },
    staleTime: 1000 * 60 * 10,
    enabled: !!token,
    retry: false,
  });
};

export default useUser;
