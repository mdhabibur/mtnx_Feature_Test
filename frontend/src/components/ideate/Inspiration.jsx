import React from 'react'
import TrendingItem from './TrendingItem'
import { Link } from 'react-router-dom'
import ProjectCard from '../home/ProjectCard'

import instagram_reels from "../../assets/images/homepage/createProjects/Instagram_reels.svg"
import youtube_shorts from "../../assets/images/homepage/createProjects/youtube_shorts.svg"
import linked_in_shorts from "../../assets/images/homepage/createProjects/linkedIn_shorts.svg"

import board_management from "../../assets/images/homepage/createProjects/board_management.svg"

import img1 from "../../assets/images/ideate/inspirations/img1.svg"
import img2 from "../../assets/images/ideate/inspirations/img2.svg"
import img3 from "../../assets/images/ideate/inspirations/img3.svg"
import img4 from "../../assets/images/ideate/inspirations/img4.svg"
import img5 from "../../assets/images/ideate/inspirations/img5.svg"
import img6 from "../../assets/images/ideate/inspirations/img6.svg"
import img7 from "../../assets/images/ideate/inspirations/img7.svg"


import ideas1 from "../../assets/images/ideate/inspirations/ideas1.svg"
import ideas2 from "../../assets/images/ideate/inspirations/ideas2.svg"
import ideas3 from "../../assets/images/ideate/inspirations/ideas3.svg"
import ideas4 from "../../assets/images/ideate/inspirations/ideas4.svg"
import ideas5 from "../../assets/images/ideate/inspirations/ideas5.svg"
import ideas6 from "../../assets/images/ideate/inspirations/ideas6.svg"
import ideas7 from "../../assets/images/ideate/inspirations/ideas7.svg"



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

    const ideateInspireData = [
        {
            id:1,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: img1

        },
        {
            id:2,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: img2

        },

        {
            id:3,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: img3

        },

        {
            id:4,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: img4

        },
        {
            id:5,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: img5

        },
        {
            id:6,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: img6

        },
        {
            id:7,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: img7

        },
        {
            id:8,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: img1

        },
        {
            id:9,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: img2

        },
        {
            id:10,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: img3

        },

    ]

    const ideateIdeasData = [
        {
            id:1,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: ideas1

        },
        {
            id:2,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: ideas2

        },

        {
            id:3,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: ideas3

        },

        {
            id:4,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: ideas4

        },
        {
            id:5,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: ideas5

        },
        {
            id:6,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: ideas6

        },
        {
            id:7,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: ideas7

        },
        {
            id:8,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: ideas1

        },
        {
            id:9,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: ideas2

        },
        {
            id:10,
            name: "@TechLead",
            des: "2.5M views  ·  1 year ago",
            image: ideas3

        },

    ]


  return (
    <div className='flex flex-col gap-3 '>


        <div className='flex flex-row flex-wrap gap-5 items-start w-[100%] cursor-pointer'>

        <Link to="#" className='w-[20%]  font-bold  text-sm pb-1 hover:translate-x-1 transition-all duration-200'>For You</Link>

        <Link to="#" className='w-[20%]  text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Trending</Link>

        <Link to="#" className='w-[20%]  text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Latest</Link>

        <Link to="#" className='w-[20%]  text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Creators</Link>

        <hr className='w-[95%] t -mt-5 border-t-4 border-gray-200'/>


        </div>


        <div className=' flex flex-col sm:flex-row sm:w-1/2 md:w-3/4 lg:w-full flex-wrap gap-5 items-start justify-start'>

        {ideateInspireData.map((item, index) => <ProjectCard key={item.id} item = {item}
        category={{ name: "inspiration_ideate" }}
         />)}
            

        </div>





        {/* Ideas  */}
        <h4 className='my_h4 mt-4'>Ideas</h4>

        <div className=' flex flex-col sm:flex-row sm:w-1/2 md:w-3/4 lg:w-full flex-wrap gap-5 items-start justify-start'>

        {ideateIdeasData.map((item, index) => <ProjectCard key={item.id} item = {item}
        category={{ name: "inspiration_ideate" }}
          />)}
            

        </div>

    </div>
  )
}

export default Inspiration