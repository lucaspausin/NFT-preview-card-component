/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				softBlue: "hsl(215, 51%, 70%)",
				cyan: "hsl(178, 100%, 50%)",
				blueMainBG: "hsl(217, 54%, 11%)",
				bluecardBG: "hsl(216, 50%, 16%)",
				line: "hsl(215, 32%, 27%)",
			},
			fontFamily: {
				outfit: "Outfit",
			},
			backgroundImage: {
				hero: "url('/images/icon-view.svg)",
			},
		},
	},
	plugins: [],
};
