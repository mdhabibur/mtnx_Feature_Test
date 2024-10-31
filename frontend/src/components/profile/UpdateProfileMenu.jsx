import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, toggleUpdateProfileDialog, toggleUpdateProfileDialogMenu } from '../../redux/auth/authSlice'
import { FaSignOutAlt, FaUserEdit } from 'react-icons/fa'

const UpdateProfileMenu = () => {

  const {userProfile } = useSelector((state) => state.auth)

  console.log("user profile: ", userProfile)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
}

const handelProfileOnMouseLeave = (e) => {
  dispatch(toggleUpdateProfileDialogMenu(false))
}

const handleUpdateProfile = () => {
  dispatch(toggleUpdateProfileDialog(true));
};


  return (
    <div onClick={handelProfileOnMouseLeave} className='absolute right-0 top-16 flex flex-col items-start border px-5 py-2 bg-gray-100 text-gray-500 rounded-lg shadow-lg cursor-pointer'>
     
      <button className='pt-2 px-2  text-sm font-semibold uppercase '>{userProfile.name !== null ? userProfile.name : "John Doe"}</button>

      <button className='pt-1 pb-2 px-2 text-[10px] border-b italic w-full text-left '>{userProfile.bio !== null ? userProfile.bio : "Software developer"}</button>

      <button onClick={handleUpdateProfile} className='py-2 mt-2 px-2  hover:bg-gray-300 rounded-lg text-sm font-semibold w-full text-left flex flex-row gap-2  items-center justify-start '>
        <FaUserEdit />
        <p>Update profile</p>
      </button>

      <button onClick={handleLogout} className='py-2 px-2 hover:bg-gray-300 rounded-lg text-sm font-semibold w-full text-left flex flex-row gap-2  items-center justify-start'>
        <FaSignOutAlt />
        <p>Logout</p>
        </button>

    </div>
  )
}

export default UpdateProfileMenu