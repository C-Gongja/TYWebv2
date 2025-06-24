/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"urbanist": ["Urbanist", "serif"],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				maincolor: '#646cff',
				maindarkcolor: '#4952fe',
			},
		},
	},
	plugins: [
		require('daisyui'),
	],
}

