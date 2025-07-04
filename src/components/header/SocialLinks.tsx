import React from 'react';
import { Link } from 'react-router-dom';
import { personalLinks } from '../../routes/externalRoutes/ExternalRoutes'; // personalLinks 임포트

interface SocialLinksProps {
	isMobile?: boolean; // 모바일 뷰인지 여부 (스타일 변경 위함)
}

const SocialLinks: React.FC<SocialLinksProps> = ({ isMobile = false }) => {
	const containerClasses = isMobile ?
		"flex justify-center space-x-4 py-2" :
		"hidden lg:flex"; // Desktop container

	const linkWrapperClasses = isMobile ?
		"relative w-[60px] h-[60px] md:w-[90px] md:h-[90px] flex items-center justify-center rounded-xl bg-transparent transition-all duration-300 ease-in-out opacity-80" :
		"relative w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-transparent transition-all duration-300 ease-in-out hover:opacity-100 hover:bg-maindarkcolor group";

	const iconClasses = isMobile ?
		"w-full h-full text-[var(--text-main)] group-hover:text-custom-lightmint transition-colors duration-300" :
		"w-full h-full text-[var(--text-main)] group-hover:text-custom-purple transition-colors duration-300";

	return (
		<div className={containerClasses}>
			<ul className={`flex justify-center ${isMobile ? 'space-x-4' : 'space-x-4 cursor-pointer'}`}>
				{personalLinks.map((link, index) => {
					const Icon = link.icon;
					return (
						<li key={index} className={linkWrapperClasses}>
							<Link
								to={link.link}
								target={link.appName === "CV" ? "_self" : "_blank"}
								className="w-[70%] h-[70%] flex items-center justify-center z-10"
							>
								<Icon className={iconClasses} />
							</Link>
							{!isMobile && ( // 데스크톱에서만 hover 효과용 span 추가
								<span className="absolute inset-0 rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SocialLinks;