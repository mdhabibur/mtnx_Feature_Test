import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const TrendingItem = ({trendingData}) => {
	return (
		<div className="w-full lg:max-w-3xl flex flex-row gap-3 border rounded-md px-1 py-2">

			<div className="w-3/4 flex flex-row items-center justify-start px-2">
                <p className="small_card_sub_title2">{trendingData.title}</p>
			</div>

			<div className="w-1/4 flex justify-end  items-center text-xs">
				<button className="bg bg-gray-300 text-black py-2 px-4 rounded-full text-xs hover:font-bold">
                <FaArrowRight />
				</button>
			</div>


		</div>
	);
};

export default TrendingItem;
