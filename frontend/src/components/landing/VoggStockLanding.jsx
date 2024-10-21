import React from 'react';
import voggStockImg from '../../assets/images/landing/vogg_stock.png'

function StatsCard({ count, title, desc }) {
  return (
    <div className="bg-transparent p-4">
      <h1 className="mb-4 text-5xl text-gray-900 font-bold">{count}</h1>
      <h2 className="text-xl text-gray-900 mb-2 font-bold">{title}</h2>
      <p className="text-gray-600 motionx_openSans_font leading-relaxed">{desc}</p>
    </div>
  );
}

const stats = [
  {
    count: "1M+",
    title: "Stock Audio",
    desc: "From music to voice-overs, we provide 1 million+ stock to choose from."
  },
  {
    count: "500K+",
    title: "Video Templates",
    desc: "Access over 500,000 professional-grade video templates for any purpose."
  },
  {
    count: "99.9%",
    title: "Customer Satisfaction",
    desc: "Our AI-powered platform is trusted by creators with a 99.9% satisfaction rate."
  },
  {
    count: "50+",
    title: "AI Video Tools",
    desc: "Leverage 100+ AI-powered tools to enhance your video editing experience."
  }
];

const VoggStockLanding = () => {
  return (
    <div className="h-full w-screen place-items-center bg-white px-8 py-20 ">

      <div className="container max-w-7xl mx-auto relative">

        {/* Header Section */}
        <div className="text-left">
          {/* Gradient Title */}
          <h2 className="font-bold text-lg mb-5 bg-gradient-to-r from-blue-900 to-red-900 bg-clip-text text-transparent">
            AI-Powered Components for Effortless Video Creation
          </h2>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-blue-gray-900 mb-8 leading-tight">
            VOGG Stock
          </h1>

          {/* Description */}
          <p className="text-blue-gray-700 mb-5 lg:w-[30rem] leading-relaxed motionx_openSans_font">
            Think 1 million stock footage? Think higher. Think much much much higher. Integrated Pexels, Unsplash and many more platforms, gives you the power to access any stock graphics you want, and much more than you will ever need.
          </p>
        </div>

        {/* Stats Section */}
        <div className="lg:flex relative">


          <div className="lg:w-1/2">

            <div className="p-2 lg:p-0 mb-8">
              <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                {stats.map((props, key) => (
                  <StatsCard key={key} {...props} />
                ))}
              </div>
            </div>

          </div>
          
          {/* Image Section */}
          <img
            src={voggStockImg}
            alt="AI-powered tools"
            className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24"
          />
          
        </div>


      </div>


    </div>
  );
};

export default VoggStockLanding;
