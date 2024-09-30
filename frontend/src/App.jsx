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
					<Route path = "ideate" element = {<Ideate />} />
					<Route path = "motionx_ai" element = {<MontionXAI />} />
					<Route path = "monetization" element = {<Monetization />} />
					<Route path = "analytics" element = {<Analytics />} />

				</Route>
			</Routes>
		</Router>

	);
};

export default App;
