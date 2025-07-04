import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		postcss: "./postcss.config.js",  // PostCSS 설정 경로 추가
	},
	base: process.env.NODE_ENV === 'development' ? '' : '/TYWebv2/',
	server: {
		host: true, // 모든 네트워크 인터페이스에서 접근 가능
		port: 5173, // 기본 포트 (필요 시 변경)
	},
})
