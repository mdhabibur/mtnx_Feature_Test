import React from "react";

const ComingSoonPage = () => {
	return (
		// <div className="flex items-start justify-center lg:justify-normal lg:mx-20 w-full h-auto bg-white mt-6 border-4 ">

		<div className="flex justify-center lg:mx-20 w-full h-auto bg-white mt-6">

			<div className="max-w-xs md:max-w-xl lg:max-w-2xl text-center px-6 py-6 lg:px-20 mx-2 bg-white shadow-lg rounded-lg">
				<h2 className="my_h2 mb-4">Coming Soon!</h2>
				<p className="text-sm text-gray-600 mb-8">
					We are working hard to bring you something amazing. Stay tuned!
				</p>
				<div className="flex justify-center">
					<input
						type="email"
						placeholder="Enter your email"
						className="border border-gray-300 text-xs py-1 md:py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
					/>
					<button className="bg-indigo-500 text-xs text-white px-6 py-1 md:py-2 rounded-r-md hover:bg-indigo-600 transition duration-300">
						Notify Me
					</button>
				</div>
				<p className="mt-6 text-sm text-gray-500">
					We’ll notify you once we’re live!
				</p>
			</div>
		</div>
	);
};

export default ComingSoonPage;
