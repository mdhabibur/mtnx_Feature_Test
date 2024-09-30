import React from "react";

const ProjectCard = ({item}) => {
	return (
		<div className="card card-compact bg-base-100 w-52 h-52 shadow-xl items-start cursor-pointer hover:scale-105 transition-all duration-300 overflow-y-auto">
			<figure className = "w-full h-auto p-3">
				<img
                    className="w-full h-auto mx-auto"
					src={item.image}
					alt="project image"
				/>
			</figure>

			<div className="card-body">
				<h2 className="text-sm font-semibold">{item.name}</h2>
				<p className="text-[12px]">{item.des}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
