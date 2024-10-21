import React from 'react';
import voggAnalyticsImg from "../../assets/images/landing/vogg_analytics.png"

const VoggAnalyticsLanding = () => {
  return (
    <div className="h-full w-screen place-items-center bg-white px-8 py-8 ">

      <div className="container max-w-7xl mx-auto grid items-center relative lg:grid-cols-2">
        
        {/* Text Section */}
        <div className="text-center lg:text-left">
          {/* Gradient Title */}
          <h2 className="flex items-center justify-center lg:justify-start font-bold text-lg mb-5 bg-gradient-to-r from-blue-900 to-red-900 bg-clip-text text-transparent">
            By creators, for creators
          </h2>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-blue-gray-900 mb-8 leading-tight">
            VOGG Analytics
          </h1>

          {/* Description */}
          <p className="text-blue-gray-700 lg:pr-20 leading-relaxed motionx_openSans_font">
            Stressed about jumping from one platform to another to monitor and track analytics? Get all your data in one place, with the power of 10,000+ computers analyzing it for you and giving you real-time suggestions. Track your performance to help you create the next viral video.
          </p>
        </div>

        {/* Image Section */}
        <img src={voggAnalyticsImg} alt="analytics preview" className="max-w-2xl rounded-3xl hidden md:flex mx-auto" />
      </div>


    </div>
  );
};

export default VoggAnalyticsLanding;
