import React from 'react'
import Template from '../components/template'
import loginImg from "../assets/login.jpg"
const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skill for today , tommorow, ans beyond."
      desc2="Eduction to future -proof your career."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
