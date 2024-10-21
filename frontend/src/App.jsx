import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Script from "./pages/Script";
import './App.css'
import Ideate from "./pages/Ideate";
import MontionXAI from "./pages/MontionXAI";
import Monetization from "./pages/Monetization";
import Analytics from "./pages/Analytics";
import Docs from "./pages/Docs";
import Collaborate from "./pages/Collaborate";
import Trending from "./components/ideate/Trending";
import Insights from "./components/ideate/Insights";
import Inspiration from "./components/ideate/Inspiration";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PublicNavbar from "./components/navigation/PublicNavbar";


const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element = {<MainLayout />}>
					{/* nested routes  */}
					<Route index element = {<Home />} />
					<Route path="docs" element = {<Docs />} />
					<Route path="collaborate" element = {<Collaborate />} />
					<Route path = "script" element = {<Script />} />

					<Route path = "ideate" element = {<Ideate />} >

						<Route index element = {<Trending />} />
						<Route path="trending" element = {<Trending />} />
						<Route path="insights" element = {<Insights />} />
						<Route path="inspiration" element = {<Inspiration />} />

					</Route>

					<Route path = "motionx_ai" element = {<MontionXAI />} />
					<Route path = "monetization" element = {<Monetization />} />
					<Route path = "analytics" element = {<Analytics />} />


					<Route path="/landing" element={<Landing/>} />
					<Route path="/signup" element={<SignUp/>} />
					<Route path="/signin" element={<SignIn/>} />

				</Route>



			</Routes>
		</Router>

	);
};

export default App;
