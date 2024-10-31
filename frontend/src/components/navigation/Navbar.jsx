import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/header/logo.svg";
import profile from "../../assets/images/header/profile.svg"
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleUpdateProfileDialogMenu } from "../../redux/auth/authSlice";
import UpdateProfileMenu from "../profile/UpdateProfileMenu";


const Navbar = () => {

	const {showUpdateProfileDialogMenu } = useSelector((state) => state.auth)

	const [isSticky, setSticky] = useState(false);
	const location = useLocation()
	const dispatch = useDispatch()

	//fixed sticky navigation bar
	useEffect(() => {

		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 0) {
			  setSticky(true);
			} else {
			  setSticky(false);
			}
		  };
	  
		  window.addEventListener("scroll", handleScroll);
	  
		  return () => {
			window.removeEventListener("scroll", handleScroll);
		  };
		

	}, [])

	

	const navItems = (
		<>
			<li className="pr-2">
				<Link to="/dashboard" className={` font-semibold hover:-translate-x-1 transition-all duration-200 ${location.pathname === "/" ? "active_menu_item" : ""}`}>Home</Link>
			</li>
	
			<li className="pr-2 ">
				<Link to="/docs" className={` font-semibold hover:-translate-x-1 transition-all duration-200 ${location.pathname === "/docs" ? "active_menu_item" : ""}`}>Docs</Link>
			</li>
	
			<li className="pr-2">
				<Link to="/collaborate" className={`font-semibold hover:-translate-x-1 transition-all duration-200 ${location.pathname === "/collaborate" ? "active_menu_item" : ""}`}>Collaborate</Link>
			</li>
		</>
	);

	const handleProfileOnMouseEnter = (e) => {
		dispatch(toggleUpdateProfileDialogMenu(true))
	}

	const handelProfileOnMouseLeave = (e) => {
		dispatch(toggleUpdateProfileDialogMenu(false))
	}

	console.log("show update profile dialog menu: ", showUpdateProfileDialogMenu)
	
	return (
		<header onMouseLeave={handelProfileOnMouseLeave} className={`my_container z-50 my-0 border-b-[1px] fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out": ""}  `}>


			{/* update profile dialog  */}
			{showUpdateProfileDialogMenu && (
				<UpdateProfileMenu />
			)}



			<div id="navbar" className="navbar flex justify-between items-center p-0 m-0  "
			>

				<div className="flex items-center">

					<div className="dropdown justify-between">

						<label tabIndex={0} className="btn btn-ghost sm:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>


						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-base-100 rounded-box w-64 space-y-3"
						>
							{navItems}
						</ul>
					</div>

					<Link
						to="/dashboard"
						className="text-xl hidden sm:flex items-center justify-center gap-2 "
					>
						<img className="w-6 h-6" src={logo} alt="logo" />
						<span className="font-extrabold my-gradient-text-logo">MotionX</span>
					</Link>


				</div>


				<div className="flex flex-1 items-center justify-end">

					<ul className="menu menu-horizontal px-1 hidden sm:flex">{navItems}</ul>

					<div className="flex items-center justify-center gap-3" >
					<button className="bg bg-gray-200 w-8 h-8 rounded-full hidden sm:flex items-center justify-center">
					<FaSearch className="w-[18px] h-[18px]" />
					</button>

					<button className="bg bg-gray-200 w-8 h-8 rounded-full hidden sm:flex items-center justify-center">
					<IoIosNotifications className="w-6 h-6" />
					</button>

					<button
					onMouseEnter={handleProfileOnMouseEnter}
					
					className="bg bg-gray-200 w-8 h-8 rounded-full items-center justify-center hover:scale-105 transition-all duration-200">

					<img className="w-8 h-8" src={profile} alt="logo" />
					</button>

					</div>



					

				</div>


			</div>


		</header>
	);
};

export default Navbar;
