import { useMutation } from "@tanstack/react-query"
import { updateProfile } from "../api/auth"

const useUpdateProfile = () => {
  return (
    useMutation({
      mutationFn:({formData, token}) => updateProfile(formData, token),
      onSuccess: (data) => {
        if(data.success){
          alert(data.message)
        }
      },
      onError: (error) => {
        console.error("Update failed:", error);
        alert("프로필 업데이트에 실패했습니다.");
      }
    })
  )
}
export default useUpdateProfile