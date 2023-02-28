/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				lato: ["Lato", "sans-serif"],
			},
			colors: {
				bl: "#0182FF",
			},
		},
	},
	plugins: [],
};
