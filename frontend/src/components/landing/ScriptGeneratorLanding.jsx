import React from 'react';
import script_generation from '../../assets/images/landing/script_generation.png'

const ScriptGeneratorLanding = () => {
  return (

    <div className="h-full max-w-7xl mx-auto  place-items-center bg-white py-20 ">

      <div className="container mx-auto grid items-center relative lg:grid-cols-2">

        <div className="mb-8 mx-4">
          {/* Title with Gradient Text */}
          <h2 className="flex items-center font-bold text-lg mb-5 bg-gradient-to-r from-blue-900 to-red-900 bg-clip-text text-transparent">
            Fuel the new era of creativity with
          </h2>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-blue-gray-900 mb-4 leading-tight">
            VOGG Script Generator
          </h1>

          {/* Subheading/Description */}
          <p className="text-blue-gray-700 lg:pr-32 leading-relaxed motionx_openSans_font">
            Integrated with the style of Claude AI, and with the Mettle of GPT-4, we will not let anything come between your way and your ideas.
          </p>
        </div>

        {/* Image */}
        <img
          src={script_generation}
          alt="VOGG Script Generator"
          className="mx-auto hidden md:flex"
        />


      </div>

    </div>
  );
};

export default ScriptGeneratorLanding;
