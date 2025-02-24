import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";
import Title from "../components/common/Title";

const Signup = () => {
  const {mutate} = useRegister();
  const handleSignup = async (formData) => {
    if(formData) mutate(formData)
  };

  return (
    <div className="flex-1 bg-[var(--bg-primary)] flex flex-col items-center justify-center p-[var(--gap-lg)]">
      <div className="max-w-md w-full bg-white rounded-2xl p-10
                    shadow-[var(--card-shadow)]">
        <Title>
          회원가입
        </Title>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div className="text-center mt-6">
          <p className="text-gray-600">
            이미 계정이 있으신가요?{" "}
            <Link to="/login" className="text-[var(--text-primary)] hover:text-[var(--button-hover)] font-medium">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

