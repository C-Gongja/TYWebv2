import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingScreen from './components/loading-screen';
import Layout from './components/layout';
import MainPage from './routes/main-page';
import Resume from './routes/resume';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <MainPage />,
			},
			{
				path: "resume",
				element: <Resume />,
			},
		],
		// basename: process.env.NODE_ENV === 'production' ? '/TYWebv2' : '/',
	},
]);

function App() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		console.log(process.env.NODE_ENV);
	});

	useEffect(() => {
		// init();
		setIsLoading(false);
	}, []);

	return (
		<body
			className="font-urbanist w-full h-scree bg-violet-900 scrollbar-hidden"
		>
			<>
				<div className="">
					{/* <GlobalStyles /> */}
					{isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
				</div >
			</>
		</body >
	);
}

export default App
