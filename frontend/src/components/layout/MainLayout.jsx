import React from "react";
import Navbar from "../navigation/Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";
import home from "../../assets/images/sidebar/home.svg"
import script from "../../assets/images/sidebar/script.svg"
import ideate from "../../assets/images/sidebar/ideate.svg"
import motionx_ai from "../../assets/images/sidebar/motionx_ai.svg"
import monetization from "../../assets/images/sidebar/monetization.svg"
import analytics from "../../assets/images/sidebar/analytics.svg"



const MainLayout = () => {

    const location = useLocation()

	return (
		<div>
			<Navbar />
			{/* <Sidebar /> */}
            <div className="flex flex-row justify-between gap-4 my-16">

            <div className="flex flex-col w-[20%] sm:w-[22%] md:w-[22%] lg:w-[16%] max-h-full container px-4 sm:px-10 md:px-6 bg-white ">
                <ul className="space-y-1 py-6">

                    <li>
                        <Link href="/" className={`flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/' ? "active_menu_item": ""}`}>
                            <img src={home} className="w-5 h-5" alt="" />
                            <span className="font-semibold hidden sm:block">Home</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/script" className={`flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/script' ? "active_menu_item": ""}`}>
                            <img src={script} className="w-5 h-5" alt="" />
                            <span className="font-semibold hidden sm:block">Script</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/ideate" className={`flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/ideate' ? "active_menu_item": ""}`}>
                            <img src={ideate} className="w-5 h-5" alt="" />
                            <span className="font-semibold hidden sm:block">Ideate</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/motionx_ai" className={`flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/motionx_ai' ? "active_menu_item": ""}`}>
                            <img src={motionx_ai} className="w-5 h-5" alt="" />
                            <span className="font-semibold hidden sm:block">MotionX AI</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/monetization" className={`flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/monetization' ? "active_menu_item": ""}`}>
                            <img src={monetization} className="w-5 h-5" alt="" />
                            <span className="font-semibold hidden sm:block">Monetization</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/analytics" className={`flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 text-sm rounded-lg hover:-translate-y-[2px] transition-all duration-200 ${location.pathname === '/analytics' ? "active_menu_item": ""}`}>
                            <img src={analytics} className="w-5 h-5" alt="" />
                            <span className="font-semibold hidden sm:block">Analytics</span>
                        </Link>
                    </li>




                </ul>

            </div>


            <div className="flex w-[80%] sm:w-[78%] md:w-[78%] lg:w-[84%]  h-full ">
            {/* nested child routes components  */}
			<Outlet />
            </div>


            </div>



		</div>
	);
};

export default MainLayout;
