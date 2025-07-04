import { useEffect, useRef } from "react";

interface TabButtonProps {
	tab: string;
	activeTab: string;
	setActiveTab: (tab: string) => void;
}


const TabButton: React.FC<TabButtonProps> = ({ tab, activeTab, setActiveTab }) => {
	const isActive = activeTab === tab;
	const wasActiveRef = useRef(false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const button = buttonRef.current;
		if (!button) return;

		if (!isActive && wasActiveRef.current) {
			button.classList.remove('after:animate-scale-in');
			button.classList.add('after:animate-scale-out');
			const timeout = setTimeout(() => {
				button?.classList.remove('after:animate-scale-out');
			}, 300);
			return () => clearTimeout(timeout);
		}

		if (isActive) {
			button.classList.remove('after:animate-scale-out');
			button.classList.add('after:animate-scale-in');
		}

		wasActiveRef.current = isActive;
	}, [isActive]);

	return (
		<button
			ref={buttonRef}
			onClick={() => setActiveTab(tab)}
			className={`
        font-orbitron relative px-2 lg:px-4 py-2 text-base lg:text-lg lg:font-medium cursor-pointer transition-all duration-300 ease-in-out
        ${isActive ? 'font-semibold text-custom-purple' : 'hover:text-custom-purple text-[var(--text-main)]'}
        after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:bg-custom-purple after:content-['']
      `}
		>
			{tab.toUpperCase()}
		</button>
	);
};

export default TabButton;