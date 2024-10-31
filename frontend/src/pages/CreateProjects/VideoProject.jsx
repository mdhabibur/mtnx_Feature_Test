import React from 'react'

const VideoProject = () => {
  return (

    <div className='my_container py-3 my-3 flex flex-col gap-5 border-4 w-full'>

            <div className="first_div flex flex-col justify-start gap-2 border-4">


            <h3 className='my_h3'>Welcome to your MotionX dashboard</h3>

            <p className='text-[12px] w-2/3'>Invite your team to manage equity on Carta and improve your experience by connecting your accounting software</p>
            </div>



            <div className='flex flex-col justify-start gap-2 border-4'>

            <h2 className='my_h2 mb-2 mt-2'>Create a new script</h2>
        
            <input
                  type="text"
                  id="prompt"
                  name="prompt"
                  placeholder='Title'
                  className="mt-1 block w-full md:w-3/4 px-3 py-1 md:py-2 border border-gray-300 
                  bg-gray-200
                  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                  text-[10px]
                  sm:text-xs"
                  required

        
                /> 
        
            <h5 className='my_h5 mt-5'>Add collaborators</h5>
        

        
            <div className="text-start">
        
                <button type='submit' 
                 className=' bg-black text-white rounded-[10px] px-5 py-2 my-3 text-xs '>
                    Save
                 </button>
        
            </div>
        
            </div>


    </div>
  )
}

export default VideoProject