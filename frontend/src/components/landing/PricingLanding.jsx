import React, { useEffect } from 'react';

function PaddleLoader() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.paddle.com/paddle/paddle.js';
      script.onload = () => {
        window.Paddle.Setup({
          vendor: 102023,
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  return null;
}

const PricingLanding = () => {
  return (
    <>
      <PaddleLoader />

      <section id="pricing" className="py-24 px-8">

        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Pricing</h2>
          <p className="mb-8 text-base text-gray-400 motionx_openSans_font">Don’t worry, we have you covered here</p>
        </div>

        <div className="mt-12">

          <div className="container mx-auto md:flex justify-center gap-10">

            {/* Free Trial Card */}
            <div className="border border-gray-200 w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 p-6 rounded-xl shadow-lg" >

              <div className="pt-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">Free Trial</h3>
                <p className="text-2xl font-semibold">$0</p>
              </div>

              <div className="text-center mt-6 text-sm font-semibold motionx_openSans_font">
                <ul className="mb-8">
                  <li className="border-b py-4 text-gray-700 border-gray-100">10 scripts</li>
                  <li className="border-b py-4 text-gray-700 border-gray-100">Link your social media platforms</li>
                  <li className="border-b py-4 text-gray-700 border-gray-100">Access to stock images</li>
                  <li className="border-b py-4 text-gray-700 border-gray-100">Limited Storage</li>
                </ul>
              </div>
            </div>

            {/* Basic Plan Card */}
            <div className="motionx_bg_black text-white w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 p-6 rounded-xl shadow-lg">

              <div className="pt-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                <p className="text-2xl font-semibold">$25</p>
              </div>

              <div className="text-center mt-6 text-gray-200 text-sm font-semibold motionx_openSans_font">
                <ul className="mb-8">
                  <li className="border-b py-4 border-gray-500">Unlimited Scripts (GPT-4, Gemini, Claude)</li>
                  <li className="border-b py-4 border-gray-500">Access to 1m+ stock images</li>
                  <li className="border-b py-4 border-gray-500">Collaboration with Teams</li>
                  <li className="border-b py-4 border-gray-500">Analytics Dashboard</li>
                </ul>
                <a href="#" onClick={() => { window.Paddle.Checkout.open({ product: 847482 }); }}>
                  <button className="motionx_btn bg-white text-black">Get Access</button>
                </a>
              </div>
            </div>

            {/* Pro Version Card */}
            <div className="motionx_bg_black text-white w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 p-6 rounded-xl shadow-lg">
              <div className="pt-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">Pro Version</h3>
                <p className="text-2xl font-semibold">$75</p>
              </div>

              <div className="text-center mt-6 text-gray-200 text-sm font-semibold motionx_openSans_font">

                <ul className="mb-8">

                  <li className="border-b border-gray-500 py-4 ">Everything in Basic</li>
                  <li className="border-b border-gray-500 py-4 ">Access to all stock images, videos, music, templates</li>
                  <li className="border-b border-gray-500 py-4 ">Access to pre-loaded viral reel templates</li>
                  <li className="border-b border-gray-500 py-4 ">Access to GPT-4, Midjourney, DALL-E, Runway</li>
                  <li className="border-b border-gray-500 py-4 ">AI Analytics Suggestion for virality</li>
                  <li className="border-b border-gray-500 py-4 ">Personal inbox</li>
                  <li className="border-b border-gray-500 py-4 ">Content Calendar (integrated scheduler)</li>
                </ul>
                <a href="#" onClick={() => { window.Paddle.Checkout.open({ product: 847482 }); }}>
                  <button className="motionx_btn bg-white text-black">Get Access</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingLanding;
