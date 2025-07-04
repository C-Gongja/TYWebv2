import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../projects-components/ProjectList'; // Project 타입 임포트
import { HeaderDropdown } from './HeaderDropDown'; // HeaderDropdown 임포트

interface NavLinksProps {
	getLinkClass: (targetId: string) => string;
	isMobile?: boolean; // 모바일 뷰인지 여부 (스타일/클릭 핸들러 변경 위함)
	onLinkClick?: () => void; // 모바일 메뉴에서 링크 클릭 시 메뉴 닫기 위함
	onProjectClick?: (project: Project) => void; // Projects 드롭다운용
}

const NavLinks: React.FC<NavLinksProps> = ({ getLinkClass, isMobile = false, onLinkClick, onProjectClick }) => {
	const commonLinkClasses = `
	${isMobile
			? 'text-[var(--text-main)] text-[25px] md:text-[30px]'
			: 'py-5 text-xl hover:text-custom-lightmint'
		}`;

	// ⭐ Projects 드롭다운 열림/닫힘 상태 관리
	const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);


	return (
		<>
			<Link to="/#home" className={`${commonLinkClasses} ${getLinkClass("home")}`} onClick={onLinkClick}>Home</Link>
			<Link to="/#skills" className={`${commonLinkClasses} ${getLinkClass("skills")}`} onClick={onLinkClick}>Skills</Link>
			<Link to="/#experience" className={`${commonLinkClasses} ${getLinkClass("experience")}`} onClick={onLinkClick}>Experience</Link>
			{/* Desktop only for HeaderDropdown, or pass onProjectClick if mobile needs a different modal flow */}
			{!isMobile && (
				<div className="py-5 dropdown dropdown-hover hover:text-custom-lightmint ">
					<Link
						to="/#projects" // 여전히 Projects 섹션으로 이동하는 링크 역할
						className={`${commonLinkClasses} ${getLinkClass("projects")}`}
						tabIndex={0} // ⭐ 키보드 접근성 및 클릭 이벤트 트리거용
						role="button" // 접근성 향상
						aria-expanded={isProjectsDropdownOpen} // 접근성 향상
					>
						Projects
					</Link>
					<div className="relative top-[20px] isolate">
						{/* onProjectClick은 DesktopNavbar에서 이 props를 통해 전달될 예정 */}
						{onProjectClick && (
							<HeaderDropdown
								handleProjectClick={onProjectClick}
								// ⭐ 드롭다운 닫기 함수 전달 (HeaderDropdown에서 외부 클릭 처리용)
								onCloseDropdown={() => setIsProjectsDropdownOpen(false)}
							/>
						)}
					</div>
				</div>
			)}
			{/* Mobile only for Projects link without dropdown */}
			{isMobile && (
				<Link to="/#projects" className={`${commonLinkClasses} ${getLinkClass("projects")}`} onClick={onLinkClick}>Projects</Link>
			)}
			<Link to="/resume" className={`${commonLinkClasses} ${getLinkClass("resume")}`} onClick={onLinkClick}>Resume</Link>
			<Link to="/#contact" className={`${commonLinkClasses} ${getLinkClass("contact")}`} onClick={onLinkClick}>Contact</Link>
		</>
	);
};

export default NavLinks;