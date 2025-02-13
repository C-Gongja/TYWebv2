import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter 임포트

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		{/* BrowserRouter에 basename 추가 */}
		<BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/TYWebv2' : '/'}>
			<App />
		</BrowserRouter>
	</StrictMode>
);
