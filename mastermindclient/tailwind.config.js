/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				clouds: {
					50: '#f6f9f9',
					100: '#ecf0f1',
					200: '#d6dfe1',
					300: '#b2c4c7',
					400: '#88a4a8',
					500: '#6a898d',
					600: '#557074',
					700: '#455b5f',
					800: '#3c4d50',
					900: '#354245',
					950: '#232c2e',
				},
			},
		},
	},
	plugins: [],
};
