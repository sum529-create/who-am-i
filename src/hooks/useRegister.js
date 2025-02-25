import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/**
 * useRegister
 * 사용자 회원정보의 결과를 생성하는 mutation 관리
 * @returns {UseMutationResult} - 사용자 회원정보 뮤테이션 객체
 */
const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    /**
     * 사용자 회원가입 요청 함수
     * @function
     */
    mutationFn: register,
    onSuccess: (data) => {
      if (data.success) {
        toast.success("회원가입에 성공하셨습니다!");
        navigate("/login");
      }
    },
    onError: (error) => {
      toast.error(
        `회원가입에 실패했습니다. 다시 시도해주세요.\n${
          error?.response?.data?.message || "알 수 없는 오류가 발생했습니다."
        }`
      );
    },
  });
};

export default useRegister;
