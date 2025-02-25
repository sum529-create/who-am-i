import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../api/auth";
import { toast } from "react-toastify";

const useUpdateProfile = () => {
  return useMutation({
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
