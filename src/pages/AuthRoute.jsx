import { Navigate, Outlet } from "react-router-dom"
import useAuthStore from "../zustand/authStore"

const AuthRoute = ({isAuthRequired, redirectTo}) => {
  const {token} = useAuthStore();

  if (isAuthRequired && !token) {
    return <Navigate to={redirectTo} replace />;
  }

  if (!isAuthRequired && token) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}

export default AuthRoute