import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const ThemeToggle = () => {
	const [theme, setTheme] = useState<Theme>('light');

	// 초기 테마 결정 (system 설정 감지 → light 또는 dark)
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as Theme | null;

		if (savedTheme === 'dark' || savedTheme === 'light') {
			setTheme(savedTheme);
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			setTheme(prefersDark ? 'dark' : 'light');
		}
	}, []);

	// 테마 변경 감지 시 class 및 localStorage 업데이트
	useEffect(() => {
		const root = document.documentElement;

		if (theme === 'dark') {
			root.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			root.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [theme]);

	// light <--> dark 전환
	const toggleTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<button
			onClick={toggleTheme}
			className="relative w-20 h-10 bg-[--theme-bg] rounded-full px-1 flex items-center transition-colors duration-300"
			aria-label="Toggle theme"
		>
			<div
				className={`absolute left-1 top-1 w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 
					${theme === 'light' ? 'translate-x-0 bg-maincolor ' : 'translate-x-10 dark:bg-gray-800'}`}
			/>
			<div className="flex justify-between w-full z-10 text-xl px-[3px] lg:px-[6px] text-gray-700 dark:text-gray-200">
				<span>☀️</span>
				<span>🌙</span>
			</div>
		</button>
	);
};

export default ThemeToggle;