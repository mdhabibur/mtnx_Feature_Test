import React from "react";
import Navbar from "../navigation/Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";
import home from "../../assets/images/sidebar/home.svg"
import script from "../../assets/images/sidebar/script.svg"
import ideate from "../../assets/images/sidebar/ideate.svg"
import motionx_ai from "../../assets/images/sidebar/motionx_ai.svg"
import monetization from "../../assets/images/sidebar/monetization.svg"
import analytics from "../../assets/images/sidebar/analytics.svg"
import PublicNavbar from "../navigation/PublicNavbar";



const MainLayout = () => {

    const location = useLocation()

      // Check if the current path is '/signin' or '/signup'
        const isPublicRoute = location.pathname === '/'|| location.pathname === '/landing' || location.pathname === '/signin' || location.pathname === '/signup';


	return (
		<div className="min-h-screen">
            {isPublicRoute ? <PublicNavbar /> : <Navbar />}
			
			
            {!isPublicRoute ?
            (
                // routes with sidebar 
                <div className="flex flex-row justify-between gap-4   mt-16 min-h-screen">

                <div className="flex flex-col w-[20%] sm:w-[22%] md:w-[22%] lg:w-[16%] container px-4 sm:px-10 md:px-6 bg-white flex-wrap min-h-full">
                    <ul className="space-y-1 py-6">
    
                        <li>
                            <Link to="/dashboard" className={` flex-wrap flex items-center gap-2 px-2 py-2  hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/' ? "active_menu_item": ""}`}>
                                <img src={home} className="w-5 h-5" alt="" />
                                <span className="font-semibold hidden sm:block">Home</span>
                            </Link>
                        </li>
    
                        <li>
                            <Link to="/script" className={` flex-wrap flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/script' ? "active_menu_item": ""}`}>
                                <img src={script} className="w-5 h-5" alt="" />
                                <span className="font-semibold hidden sm:block">Script</span>
                            </Link>
                        </li>
    
                        <li>
                            <Link to="/ideate" className={` flex-wrap flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/ideate' ? "active_menu_item": ""}`}>
                                <img src={ideate} className="w-5 h-5" alt="" />
                                <span className="font-semibold hidden sm:block">Ideate</span>
                            </Link>
                        </li>
    
    
                        <li>
                            <Link to="/motionx_ai" className={` flex-wrap flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/motionx_ai' ? "active_menu_item": ""}`}>
                                <img src={motionx_ai} className="w-5 h-5" alt="" />
                                <span className="font-semibold hidden sm:block">MotionX AI</span>
                            </Link>
                        </li>
    
    
                        <li>
                            <Link to="/monetization" className={` flex-wrap flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/monetization' ? "active_menu_item": ""}`}>
                                <img src={monetization} className="w-5 h-5" alt="" />
                                <span className="font-semibold hidden sm:block">Monetization</span>
                            </Link>
                        </li>
    
    
                        <li>
                            <Link to="/analytics" className={` flex-wrap flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/analytics' ? "active_menu_item": ""}`}>
                                <img src={analytics} className="w-5 h-5" alt="" />
                                <span className="font-semibold hidden sm:block">Analytics</span>
                            </Link>
                        </li>
    
    
    
    
                    </ul>
    
                </div>
    
    
                <div className="flex w-[80%] sm:w-[78%] md:w-[78%] lg:w-[84%] min-h-full">
                {/* nested child routes components  */}
                <Outlet />
                </div>
    
    
                </div>

            ) : 
            // routes without side bar 
            <Outlet />
        }



		</div>
	);
};

export default MainLayout;
