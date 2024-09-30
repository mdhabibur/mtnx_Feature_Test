import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";



const TopVideos = ({video}) => {
	return (
		<div className="w-full lg:max-w-3xl flex flex-row gap-3 border rounded-md px-1 py-2 shadow-md hover:-translate-y-1 transition-all duration-200">

			<div className="w-3/4 flex flex-row whitespace-nowrap items-center gap-3 justify-start">
				<img className="w-10 h-10" src={video.image} alt="collaborator" />

				<div className="flex flex-col flex-wrap gap-1">
					<p className="small_card_title">{video.title}</p>
					<p className="small_card_des">{video.views}M views • {video.likes}M likes</p>
				</div>
			</div>

			<div className="w-1/4 flex flex-col sm:flex-row justify-between gap-2 sm:gap-5 md:gap-8 items-center text-xs">
				<p className=" flex flex-1 text-black">{video.social_media}</p>
				<HiDotsHorizontal
                className=" w-5 h-4 mx-2" />
			</div>

		</div>
	);
};

export default TopVideos;
