import React, { useEffect, useState } from 'react'
import googleLogo from '../assets/images/landing/logo-google.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUser } from '../redux/auth/authApi'
import { errorMsg, loadingMsg, successMsg } from '../utils/messages'
import { clearErrorOrSuccessMsg } from '../redux/auth/authSlice'
import { showErrorOrSuccessMsgForOnlyThreeSeconds } from '../utils/showErrorOrSuccessMsgForOnlyThreeSeconds'
import { baseURL } from '../config/apiConfig'

const SignUp = () => {


  const {loading, error, success, currentUser} = useSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value

    })

  }

  console.log("formData: ", formData)


  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      //sign up user
      dispatch(signUpUser(
        {
        url: `${baseURL}/api/auth/signup`,
        formData: formData, 
      }
    ))

      
    } catch (error) {
       console.log("Error in sign up FE: ", error)

    }

  }

  //display error or success notification only for 3 seconds
  useEffect(() => {
    const cleanup = showErrorOrSuccessMsgForOnlyThreeSeconds(error, success, dispatch, clearErrorOrSuccessMsg, navigate, "/signin")
    return cleanup

  }, [error, success, dispatch, navigate])





  return (
    <section className="grid h-screen items-center p-8 ">

      <div className="text-center">

        <h3 className="text-3xl font-bold text-blue-gray-800 mb-2 motionx_openSans_font">
          Join us Today
        </h3>

        <p className="font-normal mb-12 text-gray-800 motionx_openSans_font">
          Enter your email and password to register.
        </p>




        <form onSubmit={handleFormSubmit} className="mx-auto max-w-[24rem] text-left" >

        {loading && loadingMsg()}
        {error && errorMsg(error)}
        {success && successMsg(success)}

        {console.log("signed up user id: ", currentUser)}




          <div className="mb-4 mt-4">

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleFieldChange}
              required
            />
          </div>


          <div className="mb-4">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleFieldChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full motionx_lg_btn  hover:bg-gray-700 transition-all uppercase"
          >
            Get Started
          </button>

          <div className="my-6 flex w-full items-center gap-2">

            <hr className="w-full bg-blue-gray-50" />

            <span className="font-medium opacity-50 text-blue-gray-500">OR</span>

            <hr className="w-full bg-blue-gray-50" />

          </div>

          <button
            type="button"
            className="mt-4 flex h-12 items-center justify-center gap-2 border border-gray-400 text-gray-500 py-3 rounded-lg w-full text-[14px] hover:bg-gray-200 transition-all"
          >



            <img
              src={googleLogo}
              alt="google"
              className="h-6 w-6"
            />
            <span className='uppercase font-bold'>Sign up with Google</span>
          </button>

          <p className="mt-6 text-center font-normal text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-dark transition-colors hover:text-blue-700"
            >
              Log in
            </Link>
          </p>


        </form>


      </div>
    </section>
  )
}

export default SignUp