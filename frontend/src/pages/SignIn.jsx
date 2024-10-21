import React from 'react'
import googleLogo from '../assets/images/landing/logo-google.png'

const SignIn = () => {

  return (

        <section className=" grid h-screen items-center lg:grid-cols-2 ">

          <div className="my-auto p-8 text-center sm:p-10 md:p-20 xl:px-32 xl:py-24 ">

            <h3 className="text-3xl font-bold text-blue-gray-800 mb-2">Welcome back</h3>
            <p className="font-medium text-base mb-16 text-gray-600 motionx_openSans_font">Welcome back, please enter your details.</p>
    
            <form action="#" className="mx-auto max-w-[24rem] text-left ">

              <div className="mb-4">
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                required
                />

              </div>
    
                {/* Checkbox and forgot password link */}
                <div className="flex flex-wrap items-center justify-between gap-2 " >

                    <div className=" flex items-center ">
                        <input
                        id="subscribe"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="subscribe" className="ml-2 text-sm font-medium text-gray-500">
                        Subscribe to newsletter
                        </label>
                    </div>

                    <a href="#" className="text-gray-700 font-medium">
                        Forgot password
                    </a>
                </div>
                
    
              <button
                type="submit"
                className="mt-6 w-full motionx_lg_btn hover:bg-gray-700 transition-all uppercase"
              >
                Sign in
              </button>
    
              <button
                type="button"
                className="mt-4 flex h-12 items-center justify-center gap-2 border border-gray-400 text-gray-500 py-3 rounded-lg w-full text-[14px] hover:bg-gray-200 transition-all"
              >
                <img src={googleLogo} alt="google" className="h-7 w-7" />
                <span className='uppercase font-bold'>Sign in with Google</span>
              </button>
            </form>
          </div>
    
          {/* Uncomment this if you want the background image on larger screens */}
          
          <img
            src="https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="background image"
            className="hidden h-screen w-full object-cover lg:block"
          /> 
         
        </section>
    
  )
}

export default SignIn