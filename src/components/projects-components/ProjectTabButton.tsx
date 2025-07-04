import { useEffect, useState } from "react";

interface TabButtonProps {
	tab: string;
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({ tab, activeTab, setActiveTab }) => {
	// 현재 탭의 활성 상태를 나타내는 로컬 상태
	const isActive = activeTab === tab;

	// 이전 활성 상태를 추적하여 애니메이션 방향 결정
	// 이 탭이 '이전에는 활성'이었으나 '지금은 비활성'이 된 경우를 감지
	const [wasActive, setWasActive] = useState(isActive);

	useEffect(() => {
		// 탭이 '활성' 상태가 되었을 때
		if (isActive && !wasActive) {
			// 이전에 비활성 -> 활성으로 전환되었으므로 'wasActive'를 true로 설정
			setWasActive(true);
		}
		// 탭이 '비활성' 상태가 되었을 때
		else if (!isActive && wasActive) {
			// 이전에 활성 -> 비활성으로 전환되었으므로 'wasActive'를 false로 설정
			// animate-shrink-out 애니메이션이 끝난 후 'wasActive' 상태를 false로 업데이트하여
			// 다음에 다시 활성화될 때 'shrink-in'이 제대로 동작하도록 함.
			const timer = setTimeout(() => {
				setWasActive(false);
			}, 300); // 애니메이션 지속 시간과 일치
			return () => clearTimeout(timer);
		}
	}, [isActive, wasActive]);

	// after: 가상 요소의 공통 스타일
	const afterCommonClasses = "after:absolute after:bottom-0 after:h-1 after:bg-custom-purple after:content-[''] after:w-0 after:left-1/2 after:-translate-x-1/2";

	// 애니메이션 클래스 결정 로직
	let animationClass = '';
	if (isActive) {
		// 현재 탭이 활성 상태일 때는 항상 shrink-in 애니메이션을 적용
		// (이 탭이 새로 활성화되었거나, 이미 활성 상태인데 페이지가 로드된 경우)
		animationClass = 'after:animate-shrink-in';
	} else if (wasActive) {
		// 현재 탭이 비활성 상태이지만, 이전에는 활성 상태였던 경우 (즉, 방금 비활성화된 경우)
		// shrink-out 애니메이션을 적용하여 사라지게 함
		animationClass = 'after:animate-shrink-out';
	}
	// 그 외의 경우 (비활성 탭인데, 이전에도 비활성 상태였던 경우), 애니메이션 없음 (줄도 없음)

	return (
		<button
			className={`relative px-2 lg:px-4 py-2 text-base lg:text-lg font-orbitron lg:font-medium cursor-pointer text-[var(--text-main)] transition-all duration-300 ease-in-out
        ${isActive ? 'font-semibold text-custom-purple' : 'hover:text-custom-purple'}
        ${afterCommonClasses} ${animationClass}`} // 공통 및 애니메이션 클래스 적용
			onClick={() => setActiveTab(tab)}
		>
			{tab.toUpperCase()}
		</button>
	);
};

export default TabButton;