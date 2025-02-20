import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {


  const handleLogin = async (formData) => {
    try {
      console.log(formData);
      
    } catch (error) {
      console.error(error);
      return alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요?{" "}
            <Link to="/signup">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;