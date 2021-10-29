module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				"3xl": "1920px",
			},
			minHeight: {
				"25v": "25vh",
				"50v": "50vh",
				"63v": "63vh",
				"64v": "64vh",
				"65v": "65vh",
				"70v": "70vh",
				"75v": "75vh",
				"80v": "80vh",
			},
			maxHeight: {
				"25v": "25vh",
				"50v": "50vh",
				"63v": "63vh",
				"64v": "64vh",
				"65v": "65vh",
				"70v": "70vh",
				"75v": "75vh",
				"80v": "80vh",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
