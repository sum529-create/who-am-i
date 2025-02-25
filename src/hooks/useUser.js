import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";
import { QUERY_KEYS } from "../constants/queryKeys";

const useUser = () => {
  const { token, setUser } = useAuthStore();

  return useQuery({
    queryKey: QUERY_KEYS.USER,
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
