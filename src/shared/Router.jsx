import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Error from "../pages/Error"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Signup from "../pages/Signup"
import TestPage from "../pages/TestPage"
import TestResultPage from "../pages/TestResultPage"
import Layout from "../layout/Layout"
import AuthRoute from "../pages/AuthRoute"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route element={<AuthRoute isAuthRequired={false} redirectTo={"/"}/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Route><Route path="/" element={<Home/>}/>
          <Route element={<AuthRoute isAuthRequired={true} redirectTo={"/login"}/>}>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/test-page" element={<TestPage/>}/>
            <Route path="/test-result-page" element={<TestResultPage/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router