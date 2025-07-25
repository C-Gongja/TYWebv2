/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				urbanist: ["Urbanist", "sans-serif"],
				bruno: ["Bruno Ace SC", "sans-serif"], // Add Bruno Ace SC
				orbitron: ["Orbitron", "sans-serif"],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"custom-purple": "var(--theme-custom-purple)",
				"custom-mint": '#3db0d7',
				"custom-lightmint": '#96cee0',
				"custom-bg-opposite": "var(--theme-bg-opposite)",
			},
			keyframes: {
				'scale-in': {
					'0%': { transform: 'scaleX(0)' },
					'100%': { transform: 'scaleX(1)' },
				},
				'scale-out': {
					'0%': { transform: 'scaleX(1)' },
					'100%': { transform: 'scaleX(0)' },
				},
			},
			animation: {
				'scale-in': 'scale-in 0.3s ease-in-out forwards',
				'scale-out': 'scale-out 0.3s ease-in-out forwards',
			},
		},
	},
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		styled: true,    // DaisyUI 기본 테마 스타일 적용
		themes: true,    // 테마 활성화
		base: true,      // DaisyUI 기본 스타일 (reset, typography 등)
		utils: true,     // 유틸리티 클래스 활성화 (glass, mask 등)
		logs: true,      // 빌드 로그 출력
		rtl: false,      // RTL 모드 (오른쪽에서 왼쪽)
		prefix: "",      // 클래스 접두사 (daisy-btn, daisy-card 등)
		darkTheme: "dark", // 다크 모드 테마 이름
	},
}

