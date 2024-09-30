import React from 'react'
import ComingSoonPage from '../components/layout/ComingSoonPage'
import TrendingItem from '../components/ideate/TrendingItem'

import collab1 from "../assets/images/analytics/collaboration/collab1.svg"
import collab2 from "../assets/images/analytics/collaboration/collab2.svg"
import collab3 from "../assets/images/analytics/collaboration/collab3.svg"
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const Ideate = () => {

   const location = useLocation();
   const pathname = location.pathname;


  return (
    <div className='my_container py-3 my-3 flex flex-col gap-5'>


    {pathname === "/ideate/insights" ? ( 
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 max-w-xl'>
        <h3 className='my_h3'> Idea Generation</h3>
        <button className='bg bg-gray-300 text-black py-2 px-4 rounded-[10px] text-xs hover:font-bold'>Create Post</button>
        </div>
     ) : pathname === "/ideate/inspiration" ? 
        (
        <div>
        <h3 className='my_h3'> Discover</h3>
        <p className='text-xs text-gray-500 mt-2'></p>
        </div>

        ) : 
        (   
        <div>
        <h3 className='my_h3'> Idea Generation</h3>
        <p className='text-xs text-gray-500 mt-2'>What do you want to create today?</p>
        </div>
        )
        }



    <div className='flex flex-row flex-wrap gap-5 items-start w-[100%] cursor-pointer'>

        <Link to="./trending" className={`border-b-2  text-sm pb-1 hover:translate-x-1 transition-all duration-200 ${pathname === "/ideate/trending" ? "active_link" : ""}  `}>Trending</Link>

        <Link to="./insights" className={`border-b-2  text-sm pb-1 hover:translate-x-1 transition-all duration-200 ${pathname === "/ideate/insights" ? "active_link" : ""}  `}>Insights</Link>

        <Link to="./inspiration" className={`border-b-2  text-sm pb-1 hover:translate-x-1 transition-all duration-200 ${pathname === "/ideate/inspiration" ? "active_link" : ""}  `}>Inspiration</Link>

        <hr className='w-[95%] -mt-5  p-0'/>
    </div>

    


    {/* Ideate_trending  */}
    <Outlet />




    </div>
  )
}

export default Ideate