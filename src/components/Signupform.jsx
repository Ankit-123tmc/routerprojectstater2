import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const signupform = ({setIsLoggedIn}) => {

    const navigation = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmpassword:""
        })

        const [showPassword, setShowPassword] = useState(false);
        const [showConfirmPassword, setShowConfirmPassword] = useState(false);
        const [accountType, setAccountType] = useState("student");

        function changeHandler(event) {
            setFormData( (prevData) => (
                {
                    ...prevData,
                    [event.target.name] : event.target.value
                }
            ))
        }


        function submitHandler(event){
            event.preventDefault();
            if(formData.password != formData.confirmpassword){
                toast.error("password do not match");
                return;
            }

            setIsLoggedIn(true);
            toast.success("Account Created")
            const accountData = {
                ...formData
            };
            console.log("priting account data");
            console.log(accountData);

            navigate("/dashboard");

        }
  return (
    <div>
        {/* student-Instructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-z-1 my-6 rounded-full max-w-max'>
            <button
            className={`${accountType === "student"
            ?
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("student")}>
                Student
            </button>
            <button
            className={`${accountType === "instructor"
            ?
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        {/* first and last name */}
            <div className=' w-full justify-between mt-\[20px\]'>
                <lable className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-\[1\.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type="text"
                name="firstName"
                onChange={changeHandler}
                placeholder="Enter First Name"
                value={formData.firstName}
                className='bg-richblack-800 rounded-\[0\.5rem] text-richblack-5 w-full p-\[12px\]'
                />
            </lable>

            <lable className='w-full'>
                <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-\[1\.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type="text"
                name="lastName"
                onChange={changeHandler}
                placeholder="Enter Last Name"
                value={formData.lastName}
                className='bg-richblack-800 rounded-\[0\.5rem] text-richblack-5 w-full p-\[12px\]'
                />
            </lable>
            </div>

{/* email */}
            <div className=''>
                <lable className='w-full mt-\[20px\]'>
                <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-\[1\.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter email Address"
                value={formData.email}
                className='bg-richblack-800 rounded-\[0\.5rem] text-richblack-5 w-full p-\[12px\]'
                />
            </lable>
            </div>

{/* create password and confirm password */}
            <div className=' w-full flex gap-x-'>
                <lable className='w-full relative'>
                <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-\[1\.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type={showPassword ? ("text") : ("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
                value={formData.password}
                className='bg-richblack-800 rounded-\[0\.5rem] text-richblack-5 w-full p-\[12px\]'
                />

                <span
                className='absolute right-3 top-\[38px\] cursor-pointer'
                onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?

                     (<AiOutlineEyeInvisible fontSize={24} file='#AFB2BF'/>) :

                      (<AiOutlineEye fontSize={24} file='#AFB2BF'/>)}
                </span>
            </lable>


            <lable className=' w-full relative'>
                <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-\[1\.375rem]'>Confirm Password<sup>*</sup></p>
                <input
                required
                type={showConfirmPassword ? ("text") : ("password")}
                name="confirmpassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmpassword}
                className='bg-richblack-800 rounded-\[0\.5rem] text-richblack-5 w-full p-\[12px\]'
                />

                <span 
                className='absolute right-3 top-\[38px\] cursor-pointer'
                onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?

                     (<AiOutlineEyeInvisible fontSize={24} file='#AFB2BF'/>) :

                      (<AiOutlineEye fontSize={24} file='#AFB2BF'/>)}
                </span>
            </lable>
            </div>

            <button className= 'w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7 '>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default signupform
