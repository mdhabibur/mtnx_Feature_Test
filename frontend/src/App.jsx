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
import PublicRoute from "./components/privateRoutes/PublicRoute";
import PrivateRoute from "./components/privateRoutes/PrivateRoute";
import Pages from "./pages/Pages";
import NotFound from "./components/layout/NotFound";


const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element = {<MainLayout />}>
					{/* nested routes  */}

					<Route index element = {<Landing />} />
					<Route path="landing" element={<Landing/>} />
					<Route path="signup" element={
						<PublicRoute>
							<SignUp/>
						</PublicRoute>
						
						} 
						/>
					<Route path="signin" element={
						<PublicRoute>
							<SignIn />
						</PublicRoute>
						} />

					<Route path="docs" element = {
							<Docs />
						} 
						/>

					<Route path="pages" element = {
							<Pages />
						} 
						/>	




					<Route path="dashboard" element={
						<PrivateRoute> 
							<Home />
						</PrivateRoute>} />


					<Route path="collaborate" element = {
						<PrivateRoute> 
							<Collaborate />
						</PrivateRoute>} />

					<Route path = "script" element = {
						<PrivateRoute> 
							<Script />
						</PrivateRoute>} />

					<Route path = "ideate" element = {
						<PrivateRoute> 
							<Ideate />
						</PrivateRoute>} >

						<Route index element = {<Trending />} />
						<Route path="trending" element = {<Trending />} />
						<Route path="insights" element = {<Insights />} />
						<Route path="inspiration" element = {<Inspiration />} />

					</Route>

					<Route path = "motionx_ai" element = {
						<PrivateRoute> 
							<MontionXAI />
						</PrivateRoute>} />

					<Route path = "monetization" element = {
						<PrivateRoute> 
							<Monetization />
						</PrivateRoute>} />

					<Route path = "analytics" element = {
						<PrivateRoute> 
							<Analytics />
						</PrivateRoute>} />


				</Route>

				{/* Catch-all route for unmatched paths */}
				<Route path="*" element={<NotFound />} />

			</Routes>
		</Router>

	);
};

export default App;
