import React from "react";
import AnalyticsHistoryBtn from "./AnalyticsHistoryBtn";

const CollaborationItem = ({collab}) => {
	return (
		<div className="w-full lg:max-w-3xl flex flex-row gap-3 border rounded-md px-1 py-2 shadow-md">
			<div className="w-3/4 flex flex-row items-center gap-3 justify-start ">
				<img className="w-10 h-10" src={collab.image} alt="collaborator" />

				<div className="flex flex-col flex-wrap gap-1">
					<p className="text-xs">{collab.title}</p>
					<p className="text-xs">{collab.des}</p>
				</div>
			</div>

			<div className="w-1/4 flex justify-end  items-center text-xs">
				<button className='bg bg-gray-300 py-2 px-4 rounded-[10px] text-xs hover:font-bold'>View Details</button>
			</div>
		</div>
	);
};

export default CollaborationItem;
