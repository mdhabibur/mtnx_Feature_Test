/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // Tailwind dark mode is disabled
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"], // Enforce light mode only
		darkTheme: false, // Disable dark mode detection in DaisyUI
	  },
};
