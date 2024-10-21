import React from 'react';
import vogg_working_step1 from '../../assets/images/landing/vogg_working_step1.jpg'
import vogg_working_step2 from '../../assets/images/landing/vogg_working_step2.jpg'
import vogg_working_step3 from '../../assets/images/landing/vogg_working_step3.jpg'

function BlogPostCard({ img, title, desc }) {
  return (

    <div className="bg-white ">

      <div className="h-56 w-full overflow-hidden shadow-lg rounded-lg ">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="py-6">
        <h4 className="text-2xl font-bold text-blue-gray-900 mb-2 leading-relaxed motionx_openSans_font">{title}</h4>
        <p className="text-gray-600 leading-relaxed motionx_openSans_font">{desc}</p>
      </div>

    </div>

  );
}

const posts = [
  {
    img: vogg_working_step1,
    title: "Step 1",
    desc: "Start your project with ease by choosing from our wide range of templates or creating from scratch."
  },
  {
    img: vogg_working_step2,
    title: "Step 2",
    desc: "Use our AI-powered editor to make professional-grade edits in minutes."
  },
  {
    img: vogg_working_step3,
    title: "Step 3",
    desc: "Collaborate with your team, finalize your video, and export in the highest quality."
  }
];

const VoggWorkingSteps = () => {
  return (
    <section id="voggWorkingSteps" >

      <div className="container max-w-7xl mx-auto px-8 py-10 ">

        <div className="mb-16 text-left">

          <h2 className="text-lg font-bold text-blue-600 mb-3">Get inspired!</h2>
          <h1 className="text-4xl font-bold text-blue-gray-900 mb-5">How Vogg Works</h1>
          <p className="text-blue-gray-700 leading-relaxed motionx_openSans_font">
            This is the simplest website you will ever use. That is intentional. We want to boost your productivity by 1000x. At that speed, you don’t have time for senseless graphics and slow animation.
          </p>

        </div>

        <div className="grid grid-cols-1 items-start gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-3">

          {posts.map(({ img, title, desc }) => (
            <BlogPostCard key={title} img={img} title={title} desc={desc} />
          ))}

        </div>
      </div>


    </section>
  );
};

export default VoggWorkingSteps;
