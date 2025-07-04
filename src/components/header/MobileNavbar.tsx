import React, { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import ThemeToggle from '../ui/theme/Theme';

interface MobileNavbarProps {
	isOpen: boolean;
	getLinkClass: (targetId: string) => string;
	onLinkClick: () => void;
	navbarHeight: number;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
	isOpen,
	getLinkClass,
	onLinkClick,
	navbarHeight,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [shouldSlideDown, setShouldSlideDown] = useState(false);

	useEffect(() => {
		if (isOpen) {
			// 메뉴가 열릴 때
			setIsVisible(true); // DOM에 렌더링
			document.body.style.overflow = "hidden"; // 스크롤 방지

			// 다음 프레임에서 슬라이드 다운 시작
			requestAnimationFrame(() => {
				setShouldSlideDown(true);
			});
		} else {
			// 메뉴가 닫힐 때
			setShouldSlideDown(false); // 슬라이드 업 시작

			// 애니메이션 완료 후 DOM에서 제거
			const timer = setTimeout(() => {
				setIsVisible(false);
				document.body.style.overflow = "auto"; // 스크롤 복원
			}, 300); // 애니메이션 지속 시간과 일치

			return () => {
				clearTimeout(timer);
				document.body.style.overflow = "auto";
			};
		}
	}, [isOpen]);

	// 메뉴가 완전히 숨겨져 있을 때는 렌더링하지 않음
	if (!isVisible) return null;

	return (
		<div
			className={`fixed left-0 w-full h-full top-[${navbarHeight}px]
				backdrop-blur-xl transform transition-transform duration-300 ease-in-out
				${shouldSlideDown ? 'translate-x-0' : 'translate-x-full'}
				lg:hidden overflow-y-auto`}
			style={{ top: `${navbarHeight}px` }}
		>
			<ul className="flex flex-col items-center py-8 gap-4">
				<NavLinks getLinkClass={getLinkClass} isMobile={true} onLinkClick={onLinkClick} />
				<li className="py-2">
					<SocialLinks isMobile={true} />
				</li>
				<ThemeToggle />
			</ul>
		</div>
	);
};

export default MobileNavbar;