import { useEffect, useState } from "react";
import { HeaderDropdown } from "./HeaderDropDown";
import { personalLinks } from "../../routes/externalRoutes/ExternalRoutes";
import ProjectModal from "../projects-components/modal-components/Modals";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./MobileNavbar";
import { Project } from "../projects-components/ProjectList";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const location = useLocation();
	const [activeSection, setActiveSection] = useState("home");

	//mobile 
	const [visibilityAnimation, setVisibilityAnimation] = useState(false);

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setSelectedProject(null);
		setIsModalOpen(false);
	};

	const scrollToSection = (hash: string) => {
		const targetId = hash.replace("#", "");
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			requestAnimationFrame(() => {
				targetElement.scrollIntoView({ behavior: "smooth" });
			});
		}
	};

	useEffect(() => {
		if (location.pathname === "/" && location.hash) {
			scrollToSection(location.hash);
		}
	}, [location, location.hash]);

	useEffect(() => {
		if (location.pathname !== "/") return;

		const handleScroll = () => {
			const sections = ["home", "experience", "projects", "contact"];
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [location.pathname]);

	const getLinkClass = (targetId: string) => {
		if (location.pathname === "/resume") return targetId === "resume" ? "text-violet-300" : "";
		return activeSection === targetId ? "text-violet-300" : "";
	};

	return (
		<nav>
			<div className="flex justify-center">
				<div className="fixed top-10 max-w-[80%] xl:max-w-[80%] w-full z-10 select-none">
					<div className={`flex justify-between px-[20px] lg:px-30 items-center bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] backdrop-blur-xl 
					${isOpen || visibilityAnimation ? "rounded-t-2xl" : "rounded-2xl"}`}>
						{/* Logo */}
						<div className="md:ml-5 p-3">
							<Link to="#" className="">
								<img
									src="./assest/images/logo/logo-color.PNG"
									// width={50}
									height={"auto"}
									alt="logo"
									className="select-none w-[40px] md:w-[50px]"
								/>
							</Link>
						</div>

						{/* Hamburger Icon (Mobile) */}
						<div className="lg:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="relative w-7 h-6 flex flex-col justify-between items-center"
							>
								{/* 햄버거 라인 */}
								<div
									className={`w-8 h-1 bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""
										}`}
								></div>
								<div
									className={`w-8 h-1 bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""
										}`}
								></div>
								<div
									className={`w-8 h-1 bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
										}`}
								></div>
							</button>
						</div>

						{/* Links (Desktop) */}
						<div className="hidden lg:flex lg:gap-8 text-white/25 transition-all duration-300 ease-in-out">
							<button className="transition transform hover:text-violet-100">
								<Link to="/#home" className={`text-xl ${getLinkClass("home")}`}>Home</Link>
							</button>
							<button className="transition transform hover:text-violet-100">
								<Link to="/#experience" className={`text-xl ${getLinkClass("experience")}`}>Experience</Link>
								{/* <a href="#experience" className={`text-xl ${getLinkClass("experience")}`}>Experience</a> */}
							</button>
							<div className="dropdown dropdown-hover transition transform hover:text-violet-100 py-6">
								<Link to="/#projects" className={`text-xl ${getLinkClass("projects")}`}>Projects</Link>
								<div className="absolute top-full left-2">
									<HeaderDropdown handleProjectClick={handleProjectClick} />
								</div>
							</div>
							<button className="transition transform hover:text-violet-100 ">
								<Link to="/resume" className={`text-xl ${getLinkClass("resume")}`}>Resume</Link>
								{/* <a href="resume" className={`text-xl ${getLinkClass("resume")}`}>Resume</a> */}
							</button>
							<button className="transition transform hover:text-violet-100">
								<Link to="/#contact" className={`text-xl ${getLinkClass("contact")}`}>Contact</Link>
							</button>
						</div>
						<div className="hidden lg:flex">
							<ul className="flex justify-center space-x-4 cursor-pointer">
								{personalLinks.map((link, index) => (
									<li key={index} className="relative  w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-transparent transition-all duration-200 ease-in-out opacity-25
														hover:opacity-100 hover:bg-[#7165ed] group">
										<Link to={link.link} target={link.appName === "CV" ? "_self" : "_blank"}
											className="w-[70%] h-[70%] flex items-center justify-center z-10 ">
											<img src={link.icon} alt="GitHub Icon" className="mb-1" />
										</Link>
										<span className="absolute inset-0 rounded-xl opacity-0 shadow-[0_0_0_2px_#4837ff] transition-all duration-200 
														 group-hover:opacity-100 group-hover:scale-110"></span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Mobile Menu (Hamburger) */}
					<Dropdown isOpen={isOpen} visibilityAnimation={visibilityAnimation} setVisibilityAnimation={setVisibilityAnimation}>
						<li className="py-2">
							<Link to="/#home" onClick={() => setIsOpen(!isOpen)} className={`text-[25px] md:text-[30px] ${getLinkClass("home")}`}>Home</Link>
						</li>
						<li className="py-2">
							<Link to="/#experience" onClick={() => setIsOpen(!isOpen)} className={`text-[25px] md:text-[30px] ${getLinkClass("experience")}`}>Experience</Link>
						</li>
						<li className="py-2">
							<Link to="/#projects" onClick={() => setIsOpen(!isOpen)} className={`text-[25px] md:text-[30px] ${getLinkClass("projects")}`}>Projects</Link>
						</li>
						<li className="py-2">
							<Link to="/resume" onClick={() => setIsOpen(!isOpen)} className={`text-[25px] md:text-[30px] ${getLinkClass("resume")}`}>Resume</Link>
						</li>
						<li className="py-2">
							<Link to="/#contact" onClick={() => setIsOpen(!isOpen)} className={`text-[25px] md:text-[30px] ${getLinkClass("contact")}`}>Contact</Link>
						</li>
						<li className="flex justify-center space-x-4 py-2">
							{personalLinks.map((link, index) => (
								<div key={index} className="relative w-[60px] h-[60px] md:w-[90px] md:h-[90px] flex items-center justify-center rounded-xl bg-transparent transition-all duration-200 ease-in-out opacity-80">
									<Link to={link.link} target={link.appName === "CV" ? "_self" : "_blank"} className="w-[70%] h-[70%] flex items-center justify-center z-10">
										<img src={link.icon} alt="Icon" className="mb-1" />
									</Link>
								</div>
							))}
						</li>
					</Dropdown>
				</div>
			</div>

			{
				isModalOpen && selectedProject && (
					<ProjectModal project={selectedProject} onClose={handleCloseModal} />
				)
			}
		</nav >
	);
};

export default Navbar;
