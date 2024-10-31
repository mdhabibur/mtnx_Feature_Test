import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, toggleUpdateProfileDialogMenu } from '../../redux/auth/authSlice'

const UpdateProfileMenu = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
}

const handelProfileOnMouseLeave = (e) => {
  dispatch(toggleUpdateProfileDialogMenu(false))
}


  return (
    <div onClick={handelProfileOnMouseLeave} className='absolute right-0 top-16 flex flex-col items-start border px-6 py-3 bg-gray-50 text-gray-700 rounded-lg shadow-lg cursor-pointer'>
     
      <button className='pt-2 px-2  text-sm font-semibold '>John Doe</button>
      <button className='pt-1 pb-2 px-2 text-[10px] border-b'>Software developer at XYZ company</button>

      <button className='py-1 mt-2 px-2  hover:bg-gray-300 rounded-lg text-sm font-semibold'>Update profile</button>

      <button onClick={handleLogout} className='py-1 px-2 hover:bg-gray-300 rounded-lg text-sm font-semibold'>Logout</button>

    </div>
  )
}

export default UpdateProfileMenu