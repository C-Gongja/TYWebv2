import { useEffect, useState, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Project } from "../projects-components/ProjectList";
import ProjectModal from "../projects-components/modal-components/Modals";

import MobileNavbar from "./MobileNavbar";
import HamburgerButton from "./HamburgerButton";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const location = useLocation();
	const [activeSection, setActiveSection] = useState("home");
	const [navbarHeight, setNavbarHeight] = useState(0); // Navbar 높이 저장
	const navbarRef = useRef<HTMLDivElement>(null); // Navbar 참조

	// Navbar 높이 계산
	useEffect(() => {
		const updateNavbarHeight = () => {
			if (navbarRef.current) {
				setNavbarHeight(navbarRef.current.offsetHeight);
			}
		};

		updateNavbarHeight(); // 초기 높이 설정
		window.addEventListener("resize", updateNavbarHeight); // 창 크기 변경 시 높이 업데이트
		return () => window.removeEventListener("resize", updateNavbarHeight);
	}, []);

	const handleProjectClick = useCallback((project: Project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	}, []);

	const handleCloseModal = useCallback(() => {
		setSelectedProject(null);
		setIsModalOpen(false);
	}, []);

	// Section scrolling logic
	const scrollToSection = useCallback((hash: string) => {
		const targetId = hash.replace("#", "");
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			requestAnimationFrame(() => {
				targetElement.scrollIntoView({ behavior: "smooth" });
			});
		}
	}, []);

	useEffect(() => {
		if (location.pathname === "/" && location.hash) {
			scrollToSection(location.hash);
		}
	}, [location, scrollToSection]);

	// Active section highlighting on scroll
	useEffect(() => {
		if (location.pathname !== "/") return;

		const handleScroll = () => {
			const sections = ["home", "skills", "experience", "projects", "contact"];
			let currentActiveSection = "home"; // Default to home

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					// 섹션이 뷰포트 중앙에 가까이 왔을 때 활성화
					if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
						currentActiveSection = section;
						break; // 가장 먼저 조건을 만족하는 섹션을 찾으면 중단
					}
				}
			}
			setActiveSection(currentActiveSection);
		};

		// 스크롤 이벤트 리스너 추가
		window.addEventListener("scroll", handleScroll);
		// 컴포넌트 언마운트 시 리스너 제거
		return () => window.removeEventListener("scroll", handleScroll);
	}, [location.pathname]); // location.pathname이 변경될 때만 이 effect 재실행

	// Function to determine link class for active section highlighting
	const getLinkClass = useCallback((targetId: string) => {
		if (location.pathname === "/resume") {
			return targetId === "resume" ? "text-custom-purple" : "";
		}
		return activeSection === targetId ? "text-custom-purple" : "";
	}, [location.pathname, activeSection]);

	// Mobile menu close handler
	const handleMobileLinkClick = useCallback(() => {
		setIsMobileMenuOpen(false);
	}, []);

	return (
		<nav>
			<div className="flex justify-center">
				<div
					ref={navbarRef}
					className="fixed xl:max-w-[100%] w-full z-50 select-none"
				>
					<div className={`flex justify-between px-10 items-center py-3 lg:py-0
						backdrop-blur-xl
						lg:justify-center lg:gap-10 lg:px-30 `}
					>
						{/* Logo */}
						<div className="">
							<Link to="#" className="">
								<img
									src="./assest/images/logo/logo-color.PNG"
									height={"auto"}
									alt="logo"
									className="select-none w-[40px] md:w-[50px]"
								/>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<DesktopNavbar getLinkClass={getLinkClass} onProjectClick={handleProjectClick} />

						{/* Hamburger Icon */}
						<HamburgerButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
					</div>

					{/* Mobile Navigation */}
					<MobileNavbar
						isOpen={isMobileMenuOpen}
						getLinkClass={getLinkClass}
						onLinkClick={handleMobileLinkClick}
						navbarHeight={navbarHeight} // Navbar 높이 전달
					/>
				</div>
			</div>

			{/* Project Modal */}
			{isModalOpen && selectedProject && (
				<ProjectModal project={selectedProject} onClose={handleCloseModal} />
			)}
		</nav>
	);
};

export default Navbar;