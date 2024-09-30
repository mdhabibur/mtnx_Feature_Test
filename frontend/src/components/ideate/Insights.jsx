import React from 'react'
import TrendingItem from './TrendingItem'
import Chart_Ideate from './Chart_Ideate'
import VerticalBarChart from './VerticalBarChart'
import HorizontalBarChart from './HorizontalBarChart'
import TopPostsItem from './TopPostsItem'

import collab1 from "../../assets/images/analytics/collaboration/collab1.svg"
import collab2 from "../../assets/images/analytics/collaboration/collab2.svg"
import collab3 from "../../assets/images/analytics/collaboration/collab3.svg"



const Insights = () => {

    const mentalHealthChartData = {
        name: "Mental Health Chart",
        labels: [
            '1k', '1.5k', '2k', '2.5k', '3k', '3,5k',
            '4k',
          ],
        top_label: 'Mental Health',
        data: [1,2.5,3,4.5,5],
        legend_text: 'Mental Health'

    }

    const topPostsData = [
        {
            id:1,
            title: "Mental Health is important",
            likes: 1.3,
            shares: 432,
            image: collab1
        },
        {
            id:2,
            title: "I love talking about mental health",
            likes: 1.3,
            shares: 432,
            image: collab2
        },
        {
            id:3,
            title: "Mental health is so important to me",
            likes: 1.3,
            shares: 432,
            image: collab3
        },
        {
            id:4,
            title: "I'm so passionate about mental health",
            likes: 1.3,
            shares: 432,
            image: collab1
        },


    ]


  return (
    <div className='flex flex-col gap-3 '>

        <h4 className='my_h4 mt-4'>Real-time Graphs</h4>


        <div className='flex flex-col flex-wrap gap-5 items-start w-[90%] md:max-w-xl'>

            <div className='w-full flex flex-col gap-2 border rounded-lg p-2 cursor-pointer'>
                <p className='text-xs font-bold'></p>
                <Chart_Ideate chartData={mentalHealthChartData} />
            </div>

            <div className='w-full flex flex-col gap-2 border rounded-lg p-2 cursor-pointer'>
                <p className='text-xs font-bold'></p>
                <Chart_Ideate chartData={mentalHealthChartData} />
            </div>

            <div className='w-full flex flex-col gap-2 border rounded-lg p-2 cursor-pointer'>
                <p className='text-xs font-bold'></p>
                <VerticalBarChart chartData={mentalHealthChartData} />
            </div>

            <div className='w-full flex flex-col gap-2 border rounded-lg p-2 cursor-pointer'>
                <p className='text-xs font-bold'></p>
                <HorizontalBarChart chartData={mentalHealthChartData} />
            </div>



        </div>



        {/* Top Posts  */}
        <h4 className='my_h4 mt-4'>Top Posts</h4>

        <div className='max-w-[90%] flex flex-col items-start justify-start gap-2 cursor-pointer '>

            {topPostsData.map((postItem,index) => <TopPostsItem key={postItem.id} postItem={postItem} />)}

        </div>

      

    </div>
  )
}

export default Insights