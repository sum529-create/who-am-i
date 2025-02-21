import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";

const useUser = () => {
  const {token} = useAuthStore();
  
  return (
    useQuery({
      queryKey:['user'],
      queryFn: () => getUserProfile(token),
      enabled: !!token
    })
  )
}

export default useUser;