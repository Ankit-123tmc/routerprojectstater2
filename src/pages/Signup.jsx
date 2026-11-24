import React from 'react'
import signupImg from "../assets/signup.jpeg"
import Template from '../components/template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title ="Joining the millions lerning to code with StudyNotion for free"
      desc1="Build skill for today, tommorow, and beyond."
      desc2="Eduction to future-proof your career."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
