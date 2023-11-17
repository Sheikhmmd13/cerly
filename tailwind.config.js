/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Logo: "IranNastaliq",
			},
			boxShadow: {
				myShadow: "0px 0px 20px rgba(0,0,0,.25)",
			},
			colors: {
				"dark-gray": "#393939",
				brown: "#dBda94",
				purple: "#ad58f4",
			},
		},
	},
	plugins: [],
};
