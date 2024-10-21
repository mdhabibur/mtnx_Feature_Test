import React from 'react';
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import headerImg from '../../assets/images/landing/header.png'

const HeaderLanding = () => {
  return (

      <header className="h-full w-screen  mx-auto place-items-center bg-white relative px-4 py-8 lg:mb-36 ">

        <div className="container max-w-7xl mx-auto grid items-center lg:grid-cols-2  ">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left pt-32">
            {/* Header Top Info */}
            <div className="mb-8 inline-flex items-center ">
              <span className="mr-3  px-2 font-bold text-gray-800 uppercase border-r border-black">
                Vogg
              </span>
              <span className="flex items-center font-bold text-gray-900 uppercase text-dark motionx_openSans_font">
                Welcome to a new era of video creation.
              </span>
            </div>

            {/* Main Header Text */}
            <h1 className="text-4xl lg:text-5xl  mb-8 lg:mr-32 motionx_openSans_font font-extrabold"
            style={{ lineHeight: '3.5rem' }}>
              Visualise. Create.{' '}
              <span className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-200 to-red-200 bg-clip-text text-transparent motionx_openSans_font">
                Monetise.
              </span>
            </h1>

            {/* Subheader/Lead */}
            <p className="text-xl lg:pr-32 text-gray-700 leading-relaxed motionx_openSans_font">
              Vogg is your personal AI Social Media manager, designed in a way
              to let you seamlessly manage your social media journey so you can
              focus on the things that matter the most: Creating Content.
            </p>

            {/* Call to Action */}
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="/signup"
                className="flex items-center motionx_btn px-[20px] py-[10px] hover:bg-gray-600 transition duration-300"
              >
                Get Started
                <ArrowSmallRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:flex">
          <img
            src={headerImg}
            alt="Vogg - AI Social Media Manager"
            className="absolute -top-0 right-0 w-1/2 z-0"
          />
        </div>


      </header>

  );
};

export default HeaderLanding;
