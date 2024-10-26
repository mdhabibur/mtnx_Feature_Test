import React, { useState } from "react"; // Make sure to import useState
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicNavbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const { currentUserToken } = useSelector((state) => state.auth);

	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<nav className="sticky top-0 z-10 bg-white  shadow-md max-w-7xl mx-auto p-3 border border-t-0 rounded-xl ">
			<div className="flex items-center justify-between">
				{/* Brand Name */}
				<div className="text-lg font-semibold mx-2 ">
					<Link to="/">Vogg</Link>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-4">
					{!currentUserToken ? (
						<>
							<Link to="/signin">
								<button className="motionx_btn bg-transparent text-black hover:bg-gray-300 transition">
									Sign In
								</button>
							</Link>

							<Link to="/signup">
								<button className="motionx_btn">Sign Up</button>
							</Link>
						</>
					) : (
						<Link to="/dashboard">
							<button className="motionx_btn">Dashboard</button>
						</Link>
					)}
				</div>

				{/* Hamburger Icon */}
				<div className="md:hidden">
					<button onClick={toggleMenu} className="text-blue-800">
						{openMenu ? (
							<XMarkIcon className="h-6 w-6" />
						) : (
							<Bars3Icon className="h-6 w-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{openMenu && (
				<div className="md:hidden mt-2 bg-white">
					<div className="flex flex-col p-4 space-y-2">
						<Link to="/pages" className="text-gray-800">
							Pages
						</Link>
						<Link to="/docs" className="text-gray-800">
							Docs
						</Link>

						<div className="flex flex-row gap-3 py-4">
							{!currentUserToken ? (
								<>
									<Link to="/signin">
										<button className="motionx_btn bg-transparent text-gray-800 outline outline-1 hover:bg-gray-300 transition">
											Sign In
										</button>
									</Link>

									<Link to="/signup">
										<button className="motionx_btn ">Sign Up</button>
									</Link>
								</>
							) : (
								<Link to="/dashboard">
									<button className="motionx_btn">Dashboard</button>
								</Link>
							)}
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default PublicNavbar;
