import React from 'react';

interface HamburgerButtonProps {
	isOpen: boolean;
	onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick }) => {
	return (
		<div className="lg:hidden">
			<button
				onClick={onClick}
				className="relative w-7 h-6 flex flex-col justify-between items-center"
				aria-label="Toggle navigation"
			>
				<div
					className={`w-8 h-1 bg-custom-purple rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
				></div>
				<div
					className={`w-8 h-1 bg-custom-purple rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
				></div>
				<div
					className={`w-8 h-1 bg-custom-purple rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
				></div>
			</button>
		</div>
	);
};

export default HamburgerButton;