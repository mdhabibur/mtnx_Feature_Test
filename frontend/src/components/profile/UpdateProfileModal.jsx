import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorOrSuccessMsg, toggleUpdateProfileDialog } from '../../redux/auth/authSlice';
import { createUserProfile } from '../../redux/auth/authApi';
import { showErrorOrSuccessMsgForOnlyThreeSeconds } from '../../utils/showErrorOrSuccessMsgForOnlyThreeSeconds';
import { useNavigate } from 'react-router-dom';
import { errorMsg, loadingMsg, successMsg } from '../../utils/messages';
import { baseURL } from '../../config/apiConfig';


const UpdateProfileModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {showUpdateProfileDialog, loading, error, success} = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        avatar: '',
    });

    const [avatarFile, setAvatarFile] = useState(null)

    const handleClose = () => {
        dispatch(toggleUpdateProfileDialog(false));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAvatarChange = (e) => {
         const avatarFile =  e.target.files[0]
         setAvatarFile(avatarFile)
    };

    const uploadAvatarAndGetUrl = () => {
        //upload avatar and get uploaded avatar url

        const avatarUrl = "https://example.com/avatar.jpg"
        setFormData((prev) => ({...prev, avatar: avatarUrl }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form data:', formData)
            
        try {
            dispatch(createUserProfile({
            url: `${baseURL}/api/auth/profile`,
            formData
            }))

            console.log('user profile created')
            
        } catch (error) {
            console.log("Error in profile creation in FE: ", error)
    
        }


        // close the modal after 3 seconds of profile update for displaying success or error message
        setTimeout(() => {
            handleClose();
        }, 3000)

    };

    console.log("success message: ", success)

      //display error or success notification only for 3 seconds

        useEffect(() => {
            
            const cleanup = showErrorOrSuccessMsgForOnlyThreeSeconds(error, success, dispatch, clearErrorOrSuccessMsg, navigate, "/dashboard")
            return cleanup

        }, [error, success, dispatch, navigate])



    if (!showUpdateProfileDialog) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">

                <h2 className="text-lg font-semibold mb-4 border-b pb-2">Update Your Profile</h2>

                <form onSubmit={handleSubmit}>

                    <label className="block mb-2 text-sm font-medium">
                        Enter Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-2 mt-1 border rounded-lg"
                            required
                        />
                    </label>

                    <label className="block mb-2 text-sm font-medium">
                        Enter Bio:
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            className="w-full p-2 mt-1 border rounded-lg"
                            required
                        />
                    </label>

                    <div className="mb-4 py-2 text-sm font-medium flex flex-col gap-2">
                        <p className='font-semibold'>Choose Profile Image:</p>

                        <div className='flex justify-between items-center'>
                        <input
                            type="file"
                            name="avatar"
                            onChange={handleAvatarChange}
                            className=""
                            accept="image/*"
                        />

                        {avatarFile  && (

                        <button type='button' onClick={uploadAvatarAndGetUrl} className='bg-gray-800 text-white rounded-lg px-3 py-2 uppercase text-xs font-semibold w-fit'>
                            upload
                        </button>
                        
                        )}


                        </div>
 
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 uppercase font-semibold"
                    >
                        Update Profile
                    </button>
                </form>

                <button
                    onClick={handleClose}
                    className="mt-4 w-full py-2 px-4 bg-gray-800  text-white rounded-lg hover:bg-gray-400 uppercase font-semibold"
                >
                    Cancel
                </button>

                {loading && loadingMsg()}
                {error && errorMsg(error)}
                {success && successMsg(success)}

            </div>


        </div>
    );
};

export default UpdateProfileModal;