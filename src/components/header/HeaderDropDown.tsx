import { useRef } from "react";
import { Project, projects } from "../projects-components/ProjectList";

interface HeaderDropdownProps {
	handleProjectClick: (project: Project) => void;
	onCloseDropdown: () => void; // ⭐ 드롭다운을 닫는 콜백 함수 추가
}

export function HeaderDropdown({ handleProjectClick, onCloseDropdown }: HeaderDropdownProps) {
	const ulRef = useRef<HTMLUListElement>(null); // ⭐ ul 요소에 대한 ref 생성

	const handleBlur = (e: React.FocusEvent<HTMLUListElement>) => {
		// relatedTarget은 포커스를 잃은 후 포커스를 받은 요소를 나타냄
		// 만약 포커스를 받은 요소가 드롭다운 내부가 아니라면 닫음
		if (!e.currentTarget.contains(e.relatedTarget as Node)) {
			onCloseDropdown();
		}
	};

	return (
		// ⭐ div는 제거하고 ul에 직접 tabIndex와 onBlur 추가
		<ul
			ref={ulRef}
			tabIndex={0} // ⭐ 포커스를 받을 수 있도록 tabIndex 추가 (onBlur 사용 위함)
			className="dropdown-content menu 
				dark:bg-custom-lightmint bg-[#f6faff] shadow-xl
        text-custom-purple rounded-b-xl w-72 h-auto p-5 gap-3 text-lg
				transform translate-0"
			onBlur={handleBlur} // ⭐ onBlur 이벤트 핸들러 추가
			role="menu" // 접근성 향상
		>
			{projects.map((project, index) => (
				<li key={index}> {/* ⭐ a 태그 대신 li로 감싸고 role="menuitem" 추가 */}
					<a
						href="#"
						className="hover:text-custom-mint"
						onClick={(e) => {
							e.preventDefault(); // 기본 링크 동작 방지
							handleProjectClick(project);
							onCloseDropdown(); // ⭐ 프로젝트 선택 후 드롭다운 닫기
						}}
						role="menuitem" // 접근성 향상
					>
						{project.tabtitle}
					</a>
				</li>
			))}
		</ul>
	);
}