import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingScreen from './components/loading-screen';
import Layout from './components/layout';
import MainPage from './routes/main-page';
import Resume from './routes/resume';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// init();
		setIsLoading(false);
	}, []);

	return (
		<div className="font-urbanist w-full bg-violet-900 scrollbar-hidden">
			{isLoading ? (
				<LoadingScreen />
			) : (
				<BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/TYWebv2/' : ''}>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<MainPage />} />
							<Route path="resume" element={<Resume />} />
						</Route>
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App
