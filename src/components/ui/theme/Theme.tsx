import { useEffect, useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

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
			className="relative w-[60px] h-8 bg-[var(--theme-light-dark)] inset-shadow-lg rounded-full px-1 flex items-center transform transition-all duration-500 "
			aria-label="Toggle theme"
		>
			<div
				className={`absolute left-1 top-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-500 
					${theme === 'light' ? 'translate-x-0 bg-white ' : 'translate-x-7 bg-[#1e202c]'}`}
			/>
			<div className="flex justify-between w-full z-10 text-xl px-[2px]">
				<IoSunnyOutline className='text-yellow-300 dark:text-[#1e202c]' />
				<IoMoonOutline className='text-gray-200 dark:text-yellow-300' />
			</div>
		</button>
	);
};

export default ThemeToggle;