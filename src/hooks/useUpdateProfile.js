import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../api/auth";
import { toast } from "react-toastify";

/**
 * useUpdateProfile
 * 사용자 프로필 수정 결과를 생성하는 mutation 관리
 * @returns {UseMutationResult} - 사용자 프로필 수정 뮤테이션 객체
 */
const useUpdateProfile = () => {
  return useMutation({
    /**
     * 사용자 프로필 업데이트 함수
     * @function
     * @param {FormData} formData - 수정할 새로운 사용자 데이터
     * @param {string} token - 사용자 access token 데이터
     */
    mutationFn: ({ formData, token }) => updateProfile(formData, token),
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
      }
    },
    onError: (error) => {
      console.error("Update failed:", error);
      toast.error("프로필 업데이트에 실패했습니다.");
    },
  });
};
export default useUpdateProfile;
