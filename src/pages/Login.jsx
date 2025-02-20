import { login } from "../api/auth";
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const Login = () => {
  const navigate = useNavigate();
  const {setUser, setToken} = useAuthStore();
  const handleLogin = async (formData) => {
    try {
      if(formData){
        const data = await login(formData)
        if(data.success){
          setToken(data.accessToken);
          setUser({
            userId: data.userId,
            nickname: data.nickname,
            avatar: data.avatar
          })
          console.log("로그인 후 상태:", useAuthStore.getState().user);
          navigate('/')
        }
      }
    } catch (error) {
      console.error(error);
      return alert(`로그인에 실패했습니다. 다시 시도해주세요.\n${error?.response?.data?.message || '알 수 없는 오류가 발생했습니다.'}`);
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