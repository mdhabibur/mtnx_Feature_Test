import React from 'react';
import vogg_video from '../../assets/images/landing/vogg_video.webp'

const JoinVoggLanding = () => {
    return (
      <section className="py-8 px-8 lg:py-20">

        <div className="container max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#A6C8F2] to-[#D99A9A]">


          <div className="flex flex-col-reverse md:flex-row gap-16 sm:gap-48 md:gap-0 overflow-hidden rounded-3xl">

            <div className="py-20 px-14 md:w-7/12 bg-gradient-to-r from-[#A6C8F2] to-[#D99A9A]">
              <p className="text-white font-normal opacity-85">Inspired enough?</p>
              <h2 className="mb-5 text-white text-4xl font-normal">Get Started with Vogg Today</h2>
              <p className="text-white text-lg motionx_openSans_font font-semibold" >
                Join thousands of creators and businesses using Vogg to transform their video production process.
              </p>
              <a href="#">
                <button className="flex items-center mt-5 px-4 py-2 border border-white text-sm font-semibold text-white uppercase rounded-lg hover:bg-white hover:text-black transition">
                  Sign Up Now – It's Free!
                </button>
              </a>
            </div>

            <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
              <img
                src={vogg_video}
                alt="vid"
                className="h-full w-full object-cover md:absolute"
              />
            </div>

          </div>
        </div>
      </section>
    );
  };
  
  export default JoinVoggLanding;
