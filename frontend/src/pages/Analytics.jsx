import React from 'react'
import ComingSoonPage from '../components/layout/ComingSoonPage'
import AnalyticsHistoryBtn from '../components/analytics/AnalyticsHistoryBtn'

import { RxCross1 } from "react-icons/rx";


import total_views_chart from '../assets/images/analytics/total_views_chart.svg'

import video1 from "../assets/images/analytics/top_videos/video1.svg"
import video2 from "../assets/images/analytics/top_videos/video2.svg"
import video3 from "../assets/images/analytics/top_videos/video3.svg"
import video4 from "../assets/images/analytics/top_videos/video4.svg"

import collab1 from "../assets/images/analytics/collaboration/collab1.svg"
import collab2 from "../assets/images/analytics/collaboration/collab2.svg"
import collab3 from "../assets/images/analytics/collaboration/collab3.svg"
import Chart from '../components/analytics/Chart';
import TopVideos from '../components/analytics/TopVideos';
import CollaborationItem from '../components/analytics/CollaborationItem';

const Analytics = () => {

    const totalViewChartData = {
        name: "Total views Chart",
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
          ],
        top_label: 'Total Views',
        data: [50000, 60000, 75000, 100000, 120000, 90000, 85000, 95000, 115000, 130000, 140000, 155000],
        legend_text: 'Monthly Views'

    }

    const totalWatchTimeChartData = {
        name: "Total Watch Time Chart",
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
          ],
        top_label: 'Total Watch Time',
        data: [50000, 60000, 75000, 100000, 20000, 90000, 95000, 105000, 115000, 110000, 135000, 145000],
        legend_text: 'Monthly Watch Time'

    }

    const topVideosData = [
        {
            id:1,
            title: "Vegan recipes",
            views: 1.2,
            likes: 3.2,
            social_media: "Instagram",
            image: video1
        },
        {
            id:2,
            title: "Summer fashion",
            views: 1.2,
            likes: 3.2,
            social_media: "Instagram",
            image: video2
        },
        {
            id:3,
            title: "Morning routine",
            views: 1.2,
            likes: 3.2,
            social_media: "LinkedIn",
            image: video3
        },
        {
            id:4,
            title: "Workout challenge",
            views: 1.2,
            likes: 3.2,
            social_media: "Tik Tok",
            image: video4
        },
    ]

    const collaborationData = [
        {
            id:1,
            title: "Vegan food company",
            des:"Request to create a sponsored video",
            image: collab1
        },
        {
            id:2,
            title: "Vegan food company",
            des:"Request to create a sponsored video",
            image: collab2
        },
        {
            id:3,
            title: "Vegan food company",
            des:"Request to create a sponsored video",
            image: collab3
        },

    ]


  return (
    <div className='my_container py-3 my-3 flex flex-col gap-5'>

        <div>
        <h3 className='my_h3'> Analytics</h3>
        <p className='text-xs text-gray-500 mt-2'>Short-form video content</p>
        </div>

        <div className='flex flex-row flex-wrap gap-3 items-start  w-[90%]'>

            <AnalyticsHistoryBtn title="All Time" />
            <AnalyticsHistoryBtn title="Last 7 days" />
            <AnalyticsHistoryBtn title="Last 30 days" />
            <AnalyticsHistoryBtn title="Custom range" />

        </div>

        <div className='flex flex-row flex-wrap gap-5 items-start w-[90%] cursor-pointer'>

            <p className='font-bold border-b-2 text-xs hover:translate-x-1 transition-all duration-200'>TikTok</p>
            <p className='border-b-2 text-xs hover:translate-x-1 transition-all duration-200'>Instagram</p>
            <p className='border-b-2 text-xs hover:translate-x-1 transition-all duration-200'>YouTube</p>

        </div>

        <div className='flex flex-col md:flex-row flex-wrap gap-5 items-start w-[90%] lg:max-w-3xl'>

            <div className='md:w-[340px] flex flex-col gap-2 border rounded-lg p-2 cursor-pointer'>
                <p className='text-xs font-bold'>Total views</p>
                <p className='text-sm font-bold'>5.1M</p>
                <p className='text-xs text-green-800'>+3%</p>
                <Chart chartData={totalViewChartData} />
            </div>

            <div className='md:w-[340px] flex flex-col gap-2 border rounded-lg p-2 cursor-pointer'>
                <p className='text-xs font-bold'>Total watch time</p>
                <p className='text-sm font-bold'>2.3M hours</p>
                <p className='text-xs text-green-800'>+2%</p>
                <Chart chartData={totalWatchTimeChartData} />
            </div>




        </div>


        {/* Top videos  */}
        <h4 className='my_h4 mt-4'> Top videos</h4>


        

        <div className='max-w-[90%] flex flex-col items-start justify-start gap-2 cursor-pointer '>

        {topVideosData.map((video,index) => <TopVideos key={video.id} video={video} />)}
        </div>

        {/* Collaboration  */}
        <h4 className='my_h4 mt-4'> Collaboration requests</h4>

        <div className='max-w-[90%] flex flex-col items-start justify-start gap-2 cursor-pointer '>

            {collaborationData.map((collab,index) => <CollaborationItem key={collab.id} collab={collab} />)}

        </div>


        








    </div>


  )
}

export default Analytics