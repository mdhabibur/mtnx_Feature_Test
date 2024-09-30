import React from 'react'
import ProjectCard from '../components/home/ProjectCard'
import instagram_reels from "../assets/images/homepage/createProjects/Instagram_reels.svg"
import youtube_shorts from "../assets/images/homepage/createProjects/youtube_shorts.svg"
import linked_in_shorts from "../assets/images/homepage/createProjects/linkedIn_shorts.svg"
import board_management from "../assets/images/homepage/createProjects/board_management.svg"

import tiktok_views from "../assets/images/homepage/statistics/tiktok_views.svg"
import recent_posts from "../assets/images/homepage/statistics/recent_posts.svg"

import start_project from "../assets/images/homepage/startProjects/start_project.svg"
import connect_social from "../assets/images/homepage/startProjects/connect_social.svg"


import project_analyse from "../assets/images/homepage/projectInsights/analyse.svg"
import project_compare from "../assets/images/homepage/projectInsights/compare.svg"
import project_running_posts from "../assets/images/homepage/projectInsights/running_posts.svg"
import project_dilution from "../assets/images/homepage/projectInsights/dilution.svg"







const Home = () => {

    const createProjectData = [
        {
            id:1,
            name: "Instagram reels",
            des: "Invite your team members to manage their own equity.",
            image: instagram_reels

        },
        {
            id:2,
            name: "Youtube Shorts",
            des: "Manage your ESPP program with  ease.",
            image: youtube_shorts,

        },

        {
            id:3,
            name: "LinkedIn Short form",
            des: "Access liquidity through Carta's secondary market.",
            image: linked_in_shorts

        },

        {
            id:4,
            name: "Board management",
            des: "Easily manage your board materials.",
            image: board_management

        },

    ]

    const projectInsightsData = [
        {
            id:1,
            name: "Analyse",
            des: "See who owns your company and how that ownership is distributed.",
            image: project_analyse

        },
        {
            id:2,
            name: "Compare",
            des: "View the number of shares granted and remaining for your option pool.",
            image: project_compare,

        },

        {
            id:3,
            name: "Running posts",
            des: "Track the value of your company based on the last 409A valuation.",
            image: project_running_posts

        },

        {
            id:4,
            name: "Dilution",
            des: "Understand the impact of new financing rounds on your existing ownership.",
            image: project_dilution

        },

    ]


  return (
    <div>

        <div className='my_container py-3 my-3 flex flex-col gap-5'>

            <div className="first_div flex flex-col justify-start gap-2">
            <h3 className='my_h3'>Welcome to your MotionX dashboard</h3>

            <p className='text-[12px] w-2/3'>Invite your team to manage equity on Carta and improve your experience by connecting your accounting software</p>
            </div>


            <div className="second_div flex flex-col justify-start gap-3 my-5">

                <div className='mb-4 my-3 mb-5'>
                <h2 className='my_h2 mb-2'>All your video projects at one place</h2>

                <p className='text-[13px] w-2/3 mb-4'>From onboarding to liquidity events, Carta's platform makes it easy to manage your team's equity. Invite your team to get started.</p>

                <button className='border bg-black text-white px-4 py-2 rounded-full text-xs'>Create a Project</button>
                </div>


                <div className=' flex flex-col sm:flex-row sm:w-1/2 md:w-3/4 lg:w-full flex-wrap gap-5 items-start justify-start'>

                {createProjectData.map((item, index) => <ProjectCard key={item.id} item = {item} />)}
                    

                </div>

            </div>




            <div className="third_div flex flex-col justify-start gap-3 mt-6">

                <div className='mb-4 my-3 mb-5'>
                <h2 className='my_h2 mb-2'>Get insights at a glance</h2>

                <p className='text-[13px] w-2/3 mb-4'>Quickly understand  how your video is doing on all the platforms with our new dashboard insights. Track your content virality strength, and more in real time. 
                </p>

                <button className='border bg-black text-white px-4 py-2 rounded-full text-xs'>Explore Insights</button>
                </div>


                <div className='flex flex-col sm:flex-row sm:w-1/2 md:w-3/4 lg:w-full flex-wrap gap-5 items-start justify-start'>

                {projectInsightsData.map((item, index) => <ProjectCard key={item.id} item = {item} />)}


                </div>

                <div className='flex flex-col md:flex-row md:w-[90%] lg:w-full flex-wrap  gap-5 items-start my-6 mb-8'>

                    <div className='w-[438px] flex flex-col gap-3 items-start border rounded-lg px-2 py-4 cursor-pointer'>

                    <div className='px-2 space-y-1 font-bold'>
                    <p className='text-xs'>Tiktok views</p>
                    <p className='text-lg'>+3</p>
                    </div>

                    <img src={tiktok_views} alt="tiktok views" />
                    </div>

                    <div className='w-[438px] flex flex-col gap-3 items-start border rounded-lg px-2 py-4 cursor-pointer'>
                    <div className='px-2 space-y-1 font-bold'>
                    <p className='text-xs'>Recent posts</p>
                    <p className='text-lg'>-5</p>
                    </div>

                    <img src={recent_posts} alt="posts" />
                    </div>


                </div>



            </div>


            <div className="fourth_div flex flex-col justify-start gap-3">

                <h4 className='my_h4'>Get Started</h4>

                <div className='flex flex-col md:flex-row md:w-[90%] lg:w-full flex-wrap  gap-5 items-start'>

                    <div className='w-[438px] flex flex-col items-start gap-5 border rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer p-3'>
                        <img className='w-full' src={start_project} alt="" />

                        <div className='space-y-1 py-3'>
                        <p className='text-[13px] font-semibold'>Create a project</p>
                        <p className='text-[12px]'>Invite your team members to manage their equity on Carta.</p>
                        </div>


                    </div>



                    <div className='w-[438px] flex flex-col items-start gap-5 border rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer p-3'>
                        <img className='w-full' src={connect_social} alt="" />

                        <div className='space-y-1 py-3'>
                        <p className='text-[13px] font-semibold'>Connect your social media</p>
                        <p className='text-[12px]'>Sync your accounting software to track all equity activity in one place.</p>
                        </div>

                    </div>

                </div>

            </div>

            


        </div>




    </div>
  )
}

export default Home