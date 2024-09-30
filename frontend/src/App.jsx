import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Script from "./pages/Script";
import './App.css'


const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element = {<MainLayout />}>
					{/* nested routes  */}
					<Route index element = {<Home />} />
					<Route path = "script" element = {<Script />} />

				</Route>
			</Routes>
		</Router>

	);
};

export default App;
