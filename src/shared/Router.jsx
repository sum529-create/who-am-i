import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Error from "../pages/Error"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Signup from "../pages/Signup"
import TestPage from "../pages/TestPage"
import TestResultPage from "../pages/TestResultPage"
import Layout from "../layout/Layout"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/test-page" element={<TestPage/>}/>
          <Route path="/test-result-page" element={<TestResultPage/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router