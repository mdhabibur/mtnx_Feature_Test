import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createProject, generateProjectTemplates } from '../../redux/project/createProjectApi';
import { baseURL } from '../../config/apiConfig';
import { errorMsg, loadingMsg, showInfoMsg, successMsg } from '../../utils/messages';
import { showErrorOrSuccessMsgForOnlyThreeSeconds } from '../../utils/showErrorOrSuccessMsgForOnlyThreeSeconds';
import { useFetcher, useNavigate } from 'react-router-dom';
import { clearErrorOrSuccessMsg, resetPreviousTemplates, toggleShowCreateProjectModal } from '../../redux/project/createProjectSlice';
import { FaTimes } from 'react-icons/fa';


const VideoProject = () => {

    const {currentUserToken } = useSelector((state) => state.auth)

    const {generateTemplateError, generateTemplateLoading, generateTemplateSuccess, projectData, showCreateProjectModal,  createProjectLoading, createProjectError, createProjectSuccess, newProjectData } = useSelector((state) => state.createProject)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [selectedTemplate, setSelectedTemplate] = useState({});

    const [displayEnterAllInfoPrompt, setDisplayEnterAllInfoPrompt ] = useState(false)

    // State to hold form values
    const [formData, setFormData] = useState({
      text: "",
      mediaType: 'video',
      postType: 'generic',
      aspectRatio: 'square',
      templatesPerPage: 1,
    });


      // Handle input changes
    const handleGenerateTemplateFieldChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    console.log("template form data: ", formData)

  const handleGenerateTemplateSubmit = async (e) => {
    e.preventDefault()

    try {
      dispatch(generateProjectTemplates({
        url: `${baseURL}/api/video/templates`,
        formData,
        token: currentUserToken
      }))
      
    } catch (error) {
      console.log("Error retrieving in FE: ", error)

    }

  }

  const handleCreateProject = async (e) => {

    if(formData.text === "") {
      setDisplayEnterAllInfoPrompt(true)
    }else {

      try {
        dispatch(createProject({
          url: `${baseURL}/api/video`,
          formData,
          token: currentUserToken
        }))

        
      } catch (error) {
        console.log("Error creating video project in FE: ", error)
  
      }


    }

  }

  //after creating new project clear the previous templates
  useEffect(() => {
      try {

        //also close the create video project modal
        if(createProjectSuccess){
          dispatch(resetPreviousTemplates())
          dispatch(toggleShowCreateProjectModal(false))
        }


      } catch (error) {
        
      }
  }, [createProjectSuccess, dispatch])

  const closeShowCreateProjectModal = (e) => {
    dispatch(toggleShowCreateProjectModal(false))
  }

  console.log("show Create Project Modal: ", showCreateProjectModal)


  console.log(" templates data: ", projectData)


    //display generate project template error or success notification only for 3 seconds
    useEffect(() => {
    
      const cleanup = showErrorOrSuccessMsgForOnlyThreeSeconds(generateTemplateError, generateTemplateSuccess, dispatch, clearErrorOrSuccessMsg, navigate, "")
      return cleanup
  
    }, [generateTemplateError, generateTemplateSuccess, dispatch, navigate])


    //display create new project error or success notification only for 3 seconds
    useEffect(() => {
      const cleanup = showErrorOrSuccessMsgForOnlyThreeSeconds(createProjectError, createProjectSuccess, dispatch, clearErrorOrSuccessMsg, navigate, "/dashboard")
      return cleanup
  
    }, [createProjectError, createProjectSuccess, dispatch, navigate])


    //clear info prompt after three seconds
    useEffect(() => {
      let timer 
      timer = setTimeout(() => {
        setDisplayEnterAllInfoPrompt(false)
      }, 3000)

      return () => clearTimeout(timer)

    },[displayEnterAllInfoPrompt])
  
  

  if(!showCreateProjectModal) return null

  return (

    <div className='fixed inset-0 w-full items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto'>

    <div className='my_container flex flex-col gap-5 py-4 bg-white border shadow-md rounded-lg w-[90%] max-w-2xl overflow-auto'>

            <div className='w-[80%] max-w-md mx-auto flex flex-col justify-start gap-2 border rounded-lg p-4 shadow-lg '>

            <div className='flex flex-row gap-3 justify-between items-center border border-gray-200 rounded-lg px-2 py-1 '>

              <h3 className='my_h4 text-blue-400'>Create Your video project now </h3>

              <FaTimes onClick={closeShowCreateProjectModal} className='w-4 h-4 cursor-pointer' />
            </div>


            {displayEnterAllInfoPrompt && showInfoMsg("Please Enter your prompt...")}


              <form onSubmit={handleGenerateTemplateSubmit} className="space-y-4 flex flex-col ">

              <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder='Enter your prompt'
                  className="mt-1 block w-full px-3 mb-6 mt-2 py-[10px] border border-gray-300 
                  bg-gray-200
                  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                  text-[10px]
                  sm:text-xs"
                  value={formData.text}
                  onChange={handleGenerateTemplateFieldChange}
        
                /> 


              <h2 className='my_h4 mb-4 mt-2 pb-2 border-b '>Choose Templates</h2>


              <div>
                <label className="block mb-1 form_label_heading">Media Type</label>
                <select
                  name="mediaType"
                  value={formData.mediaType}
                  onChange={handleGenerateTemplateFieldChange}
                  className="w-full p-2 border rounded form_input_heading"
                >
                  <option value="video">Video</option>
                  <option value="single_image">Single Image</option>
                  <option value="carousel">Carousel</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 form_label_heading">Post Type</label>
                <select
                  name="postType"
                  value={formData.postType}
                  onChange={handleGenerateTemplateFieldChange}
                  className="w-full p-2 border rounded form_input_heading"
                >
                  <option value="generic">Generic</option>
                  <option value="meme">Meme</option>
                  <option value="quotes">Quotes</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 form_label_heading">Aspect Ratio</label>
                <select
                  name="aspectRatio"
                  value={formData.aspectRatio}
                  onChange={handleGenerateTemplateFieldChange}
                  className="w-full p-2 border rounded form_input_heading"
                >
                  <option value="square">Square</option>
                  <option value="portrait">Portrait</option>
                  <option value="landscape">Landscape</option>
                  <option value="all">All</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 form_label_heading">Number of Templates per Page</label>
                <input
                  type="number"
                  name="templatesPerPage"
                  value={formData.templatesPerPage}
                  onChange={handleGenerateTemplateFieldChange}
                  min="1"
                  className="w-full p-2 border rounded form_input_heading"
                />
              </div>

              <div className='flex justify-between gap-3 items-center '>
                <button
                  type="submit"
                  className="motionx_btn word-space-1 mt-3"
                >
                  Generate Template
                </button>

                {console.log("selected template: ", selectedTemplate.template_id)}

        


                {selectedTemplate && selectedTemplate.template_id && (
                  <button
                  onClick={handleCreateProject}
                  type="button"
                  className="motionx_btn word-space-1 mt-3"
                >
                  create project
                </button>
                )}

              </div>


            </form>

              
        
            </div>


            <div className='w-[80%] max-w-lg mx-auto'>

              {/* generate project template messages */}
              {generateTemplateLoading && loadingMsg("generating templates...")}
              {generateTemplateError && errorMsg(generateTemplateError || "something went wrong")}
              {/* {generateTemplateSuccess && successMsg(generateTemplateSuccess)} */}


              {/* create new project messages  */}
              {createProjectLoading && loadingMsg("creating new project...")}
              {createProjectError && errorMsg(createProjectError)}
              {createProjectSuccess && successMsg(createProjectSuccess)}


            </div>


            <div className={`flex flex-wrap justify-center gap-3 
             p-4 rounded-lg content-evenly items-center ${ (generateTemplateLoading || generateTemplateError || generateTemplateSuccess || projectData) ? 'border border-gray-100 shadow-md bg-gray-50' : ""} cursor-pointer`}>

              {/* show to single_image, video and carousel templates in card view in grid colums   */}


              {
                projectData?.data?.templates.map((template, index) => (

                  <div key={template.template_id || index} 
                  onClick = {() => setSelectedTemplate(template)}
                  className={` rounded-lg shadow-lg text-sm  px-3 py-3 flex flex-col ${selectedTemplate.template_id === template.template_id ? "border border-green-400 scale-105" : "border"} `}> 



                  {template.media_type === 'single_image' && (

                    <img src={template.url}
                    alt="single image template"
                    className='w-full h-40 object-cover rounded' 
                    />

                  )}


                  {template.media_type === 'video' && (
                    <>

                    <img src={template.thumb_url} alt="video thumbnail"
                    className='w-full h-40 object-cover rounded'
                     />

                    {/* <a href={template.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs underline">
                      View Video
                    </a> */}

                    </>
                  )}



                {template.media_type === "carousel" && (
                 
                 <div className='flex gap-2 overflow-x-scroll'>

                    {template.url.map((carouselImage, imgIndex) => (

                      <img 
                        key={imgIndex}
                        src={carouselImage}
                        alt={`Carousel Image ${imgIndex + 1}`}
                        className='w-3/4 h-40 object-cover rounded'
                        />

                    ))}

                  </div>

                ) }



                <div className="mt-2">
                  <p className='text-xs'>
                    Orientation: {" "} 
                    <span className='font-semibold'>{template.template_orientation}
                    </span>

                  </p>
                  <p className='text-xs'>
                    Duration: {" "}
                     <span className='font-semibold'>{template.video_duration}
                      </span></p>
                </div>

                  </div>

                ))
              }

            </div>

    </div>


    </div>


  )
}

export default VideoProject