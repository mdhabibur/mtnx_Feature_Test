import React from "react";

const ProjectCard = ({handleCreateVideoProject, item,  category = { name: "" }}) => {
	return (
		<div onClick={handleCreateVideoProject} className="card card-compact bg-base-100 w-52 h-auto shadow-xl items-start cursor-pointer hover:scale-105 transition-all duration-300 overflow-y-auto">
			<figure className = "w-full h-auto p-3">
				<img
                    className="w-full h-auto mx-auto"
					src={item.image}
					alt="project image"
				/>
			</figure>

			<div className="card-body ">
				<h2 className={` text-sm font-semibold ${category.name === "inspiration_ideate" ? " -mt-4" : "-mt-3"} `}>{item.name}</h2>
				<p className={`text-[12px] ${category.name === "inspiration_ideate" ? " -my-2" : "-my-1"} `}>{item.des}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
