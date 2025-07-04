import { Outlet } from "react-router-dom";
import Navbar from "./header/navbar";
import Footer from "./footer/Footer";

export default function Layout() {
	return (
		<div className="layout">
			<Navbar />
			<div className="">
				<Outlet />
			</div>
			<Footer />
		</div >
	);
}