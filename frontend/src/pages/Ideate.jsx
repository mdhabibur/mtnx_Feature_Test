import React from 'react'
import ComingSoonPage from '../components/layout/ComingSoonPage'
import TrendingItem from '../components/ideate/TrendingItem'

import collab1 from "../assets/images/analytics/collaboration/collab1.svg"
import collab2 from "../assets/images/analytics/collaboration/collab2.svg"
import collab3 from "../assets/images/analytics/collaboration/collab3.svg"

const Ideate = () => {

    const topTrendingDataData = [
        {
            id:1,
            title: "#BeautyTips",

        },
        {
            id:2,
            title: "#HealthyRecipes",

        },
        {
            id:3,
            title: "#TravelBug",

        },
        {
            id:4,
            title: "#OOTD",

        },

        {
            id:5,
            title: "#DIYProjects",

        },

        {
            id:6,
            title: "#ProductReviews",

        },

        {
            id:7,
            title: "#MentalHealthMatters",

        },

        {
            id:8,
            title: "#TechTalk",

        },


    ]

    const topTrendingContent = [
        {
            id:1,
            title: "How to Build a Capsule Wardrobe",

        },
        {
            id:2,
            title: "The Best Skincare Products for Acne-Prone Skin",

        },
        {
            id:3,
            title: "What I Eat in a Day (Vegan)",

        },
        {
            id:4,
            title: "A Weekend in Tulum: Travel Vlog",

        },

        {
            id:5,
            title: "5 Easy Hairstyles for Short Hair",

        },

        {
            id:6,
            title: "My Morning Routine: Productivity Tips",

        },

        {
            id:7,
            title: "Bookshelf Tour: My Favorite Reads",

        },


    ]



  return (
    <div className='my_container py-3 my-3 flex flex-col gap-5'>

    <div>
        <h3 className='my_h3'> Idea Generation</h3>
        <p className='text-xs text-gray-500 mt-2'>What do you want to create today?</p>
    </div>


    <div className='flex flex-row flex-wrap gap-5 items-start w-[90%] cursor-pointer'>

        <p className='font-bold border-b-2 text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Trending</p>
        <p className='border-b-2 text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Insights</p>
        <p className='border-b-2 text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Inspiration</p>

    </div>

    <input
          type="text"
          id="inputField"
          placeholder='Search  for a topic, brand or creator'
          className="mt-1 block max-w-[90%] lg:max-w-3xl px-3 py-1 md:py-2 border border-gray-300 
          bg-gray-200
          rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
          text-[10px]
          sm:text-xs"
        /> 

        {/* Top Trending Topics  */}
        <h4 className='my_h4 mt-4'> Top Trending Topics</h4>

        <div className='max-w-[90%] flex flex-col items-start justify-start gap-2 cursor-pointer '>

        {topTrendingDataData.map((trendingData,index) => <TrendingItem key={trendingData.id} trendingData={trendingData} />)}

        </div>

            {/* Content Inspiration  */}
            <h4 className='my_h4 mt-4'>Content Inspiration</h4>

            <div className='max-w-[90%] flex flex-col items-start justify-start gap-2 cursor-pointer '>

            {topTrendingContent.map((topTrendingContentData,index) => <TrendingItem key={topTrendingContentData.id} trendingData={topTrendingContentData} />)}

        </div>






    </div>
  )
}

export default Ideate