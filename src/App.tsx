import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingScreen from './components/loading-screen';
import Layout from './components/layout';
import MainPage from './routes/main-page';
import Resume from './routes/resume';
import TvSwitcher from './components/animation/TvSwitcher';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [isEntering, setIsEntering] = useState(true); // 진입 애니메이션 중인지

	useEffect(() => {
		// init()
		setIsLoading(false);
		// 애니메이션 시간 후 TV 꺼짐 효과 종료
		const timer = setTimeout(() => {
			setIsEntering(false);
		}, 1500); // TvSwitcher에서 설정한 애니메이션 길이와 맞춤

		return () => clearTimeout(timer);
	}, []);

	function renderAppContent() {
		return (<>
			{
				isLoading ? (
					<LoadingScreen />
				) : (
					<BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/TYWebv2/' : ''}>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route index element={<MainPage />} />
								<Route path="resume" element={<Resume />} />
								<Route path="test" element={<TvSwitcher />} />
							</Route>
						</Routes>
					</BrowserRouter>
				)
			}

			{
				isEntering && (
					<div className="absolute inset-0 z-[9999] pointer-events-none">
						<TvSwitcher />
					</div>
				)
			}
		</>
		);
	}

	return (
		<div className="font-urbanist w-full bg-[var(--theme-bg)] no-scrollbar transition-all duration-300 ease-in-out">
			{renderAppContent()}
		</div>
	);
}

export default App
