import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const {mutate} = useLogin();

  const handleLogin = async (formData) => {
    if(formData)
    mutate(formData)
  };

  return (
    <div className="flex-1 bg-[var(--bg-primary)] flex flex-col items-center justify-center p-[var(--gap-lg)]">
      <div className="max-w-md w-full bg-white rounded-2xl p-10
                    shadow-[var(--card-shadow)]">
        <h1 className="text-[var(--title-large)] font-bold text-center mb-8 text-[var(--text-primary)]">
          로그인
        </h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div className="text-center mt-6">
          <p className="text-gray-600">
            계정이 없으신가요?{" "}
            <Link to="/signup" className="text-[var(--text-primary)] hover:text-[var(--button-hover)] font-medium">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;