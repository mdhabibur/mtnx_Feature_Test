import React from 'react';
import videoProject from '../../assets/images/landing/video_project.png'

const VideoProjectLanding = () => {
  return (
    <div className="h-full w-screen place-items-center bg-white px-8 py-8 ">

      <div className="container max-w-7xl mx-auto grid items-center relative lg:grid-cols-2">
        
        {/* Image Section */}
        <div className="hidden lg:flex">
          <img src={videoProject} alt="iphone" className="max-w-xl rounded-3xl mx-auto" />
        </div>
        
        {/* Text Section */}
        <div className="text-center lg:text-left">
          {/* Gradient Title */}
          <h2 className="flex items-center justify-center lg:justify-start font-bold text-lg mb-5 bg-gradient-to-r from-blue-900 to-red-900 bg-clip-text text-transparent">
            The ultimate toolkit for effortless video production
          </h2>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-blue-gray-900 mb-8 leading-tight">
            VOGG AI
          </h1>

          {/* Description */}
          <p className="text-gray-700 lg:pr-20 leading-relaxed motionx_openSans_font">
            Powered by the likes of the best AI Models, GPT-4, Midjourney, DALL-E, Runway, experience the endless control over B-roll generation.
          </p>
        </div>


      </div>
    </div>
  );
};

export default VideoProjectLanding;
