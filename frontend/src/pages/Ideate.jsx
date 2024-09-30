import React from 'react'
import ComingSoonPage from '../components/layout/ComingSoonPage'
import TrendingItem from '../components/ideate/TrendingItem'

import collab1 from "../assets/images/analytics/collaboration/collab1.svg"
import collab2 from "../assets/images/analytics/collaboration/collab2.svg"
import collab3 from "../assets/images/analytics/collaboration/collab3.svg"
import { Link, Outlet } from 'react-router-dom'

const Ideate = () => {


  return (
    <div className='my_container py-3 my-3 flex flex-col gap-5'>

    <div>
        <h3 className='my_h3'> Idea Generation</h3>
        <p className='text-xs text-gray-500 mt-2'>What do you want to create today?</p>
    </div>


    <div className='flex flex-row flex-wrap gap-5 items-start w-[90%] cursor-pointer'>

        <Link to="./trending" className='font-bold border-b-2 hover:border-b-4 text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Trending</Link>
        <Link to="./insights" className='border-b-2 hover:border-b-4 text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Insights</Link>
        <Link to="./inspiration" className='border-b-2 hover:border-b-4 text-sm pb-1 hover:translate-x-1 transition-all duration-200'>Inspiration</Link>

        <hr className='w-screen -mt-5  p-0'/>
    </div>

    


    {/* Ideate_trending  */}
    <Outlet />




    </div>
  )
}

export default Ideate