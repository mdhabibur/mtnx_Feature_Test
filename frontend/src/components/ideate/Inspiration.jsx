import React from 'react'
import TrendingItem from './TrendingItem'
import { Link } from 'react-router-dom'

const Inspiration = () => {

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


  return (
    <div className='flex flex-col gap-3 '>


        <div className='flex flex-row flex-wrap gap-5 items-start w-[90%] cursor-pointer'>

        <Link to="#" className='font-bold border-b-2 text-sm pb-1 hover:translate-x-1 transition-all duration-200'>For You</Link>

        <Link to="#" className='border-b-2 text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Trending</Link>

        <Link to="#" className='border-b-2 text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Latest</Link>

        <Link to="#" className='border-b-2 text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Creators</Link>

        </div>



        {/* Ideas  */}
        <h4 className='my_h4 mt-4'>Ideas</h4>

    </div>
  )
}

export default Inspiration