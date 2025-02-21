import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";

const Signup = () => {
  const {mutate} = useRegister();
  const handleSignup = async (formData) => {
    if(formData) mutate(formData)
  };

  return (
    <div>
      <div>
        <h1 >
          회원가입
        </h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요?{" "}
            <Link to="/login">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

