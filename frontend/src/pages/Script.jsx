import React from 'react'
import collaborator from '../assets/images/script/collaborator.svg'
import { RxCross1 } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa";



const Script = () => {
  return (

    <div className='my_container py-3 my-3 flex flex-col gap-5 border-4  '> 
    
    <form className='max-w-md flex flex-col gap-2 border'>

    <h2 className='my_h2'>Create a new script</h2>

    <input
          type="text"
          id="inputField"
          placeholder='Title'
          className="mt-1 block w-full px-3 py-2 border border-gray-300 
          bg-gray-200
          rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
          sm:text-xs"
        /> 

    <h5 className='my_h5 mt-5'>Add collaborators</h5>

    <div className='max-w-md flex flex-row items-center justify-between gap-2'>

        <div className='flex flex-row whitespace-nowrap items-center gap-3 justify-center'>
            <img className='w-10 h-10' src={collaborator} alt="collaborator" />
            <p className='text-xs'>Jacob <span className='text-gray-400'>@jacob</span></p>
        </div>

        <RxCross1 className='w-5 h-4 m-4' />

    </div>

    <input
          type="text"
          id="inputField"
          placeholder='Add a collaborator'
          className="mt-1 block w-full px-3 py-2 border border-gray-300
          rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
          sm:text-xs"
        /> 

    <h5 className='my_h5 my-4'>Script settings</h5>

    <div className='flex flex-row justify-between items-center my-1'>

        <div className='flex flex-col justify-start'>
            <span className='text-[12px]'>Status</span>
            <span className='text-[11px] text-gray-400'>Draft</span>
        </div>

        <FaAngleDown className='w-6 h-6' />

    </div>

    <div className='flex flex-row justify-between items-center my-1'>
        
        <div className='flex flex-col justify-start'>
            <span className='text-[12px]'>Language</span>
            <span className='text-[11px] text-gray-400'>English</span>
        </div>

        <FaAngleDown className='w-6 h-6' />

    </div>


    <div className='flex flex-row justify-between items-center my-1'>
        
        <div className='flex flex-col justify-start'>
            <span className='text-[12px]'>Model</span>
            <span className='text-[11px] text-gray-400'>General</span>
        </div>

        <FaAngleDown className='w-6 h-6' />

    </div>

    <div className="text-end">
        <button type='submit' className='text-xs bg-black text-white rounded-lg px-3 py-2 my-3 '>Save</button>
    </div>

    </form>

    </div>
  )
}

export default Script