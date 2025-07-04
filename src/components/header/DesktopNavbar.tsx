import React from 'react';
import ThemeToggle from '../ui/theme/Theme';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import { Project } from '../projects-components/ProjectList'; // Project 타입 임포트

interface DesktopNavbarProps {
	getLinkClass: (targetId: string) => string;
	onProjectClick: (project: Project) => void;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ getLinkClass, onProjectClick }) => {
	return (
		<div className="hidden lg:flex justify-center gap-10 lg:px-30 items-center">
			{/* Links */}
			<div className="flex gap-8 text-[var(--text-main)] transition-all duration-300 ease-in-out">
				<NavLinks getLinkClass={getLinkClass} onProjectClick={onProjectClick} />
			</div>
			{/* Social Links */}
			<SocialLinks />
			{/* Theme Toggle */}
			<ThemeToggle />
		</div>
	);
};

export default DesktopNavbar;