/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // Tailwind dark mode is disabled
	theme: {
		extend: {
			wordSpacing: {
				'word-space-1': '0.25em',
				'word-space-2': '0.5em',
				'word-space-3': '2rem',
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"], // Enforce light mode only
		darkTheme: false, // Disable dark mode detection in DaisyUI
	  },
};
