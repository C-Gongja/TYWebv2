import { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";
import ProjectModal from "./modal-components/Modals";
import { projects, Project } from "./ProjectList"; // Assuming Project type is defined in ProjectList
import AnimationWrapper from "../animation/AnimationWrapper";
import TabButton from "./ProjectTabButton";
import ProjectCard from "./ProjectCard";
import ScrollButton from "./ScrollButton";
import ScrollIndicator from "./ScrollIndicator";

const tabs = ["all", "ai", "web", "software"];

const Projects = () => {
	const [activeTab, setActiveTab] = useState<string>("all");
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const [isAtStart, setIsAtStart] = useState(true);
	const [isAtEnd, setIsAtEnd] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const filteredProjects: Project[] =
		activeTab === "all"
			? projects
			: projects.filter((project) => project.category === activeTab);

	// 스크롤 위치를 업데이트하는 함수
	const updateScrollPosition = useCallback(() => {
		const container = containerRef.current;
		if (container) {
			const { scrollLeft, scrollWidth, clientWidth } = container;
			setIsAtStart(scrollLeft === 0);
			// 스크롤 끝 감지: 오차를 고려하여 1px 미만으로 체크
			setIsAtEnd(Math.abs(scrollLeft + clientWidth - scrollWidth) < 0.5);

			// 인디케이터용 활성 인덱스 계산
			const cardWidth = window.innerWidth < 640 ? 320 : window.innerWidth < 768 ? 400 : 320; // 카드 너비 추정
			const index = Math.round(scrollLeft / cardWidth);
			setActiveIndex(Math.min(index, filteredProjects.length - 1));
		}
	}, [filteredProjects.length]);

	useLayoutEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
			updateScrollPosition();
		};

		handleResize();
		updateScrollPosition();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);


	// 컴포넌트 마운트 시, 탭 변경 시, 창 크기 변경 시 스크롤 이벤트 리스너 추가/제거
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// 초기 상태 설정
		updateScrollPosition();

		// 스크롤 이벤트 리스너
		container.addEventListener('scroll', updateScrollPosition);
		// 창 크기 변경 시에도 스크롤 위치 재확인 (컨테이너 크기 변경될 수 있음)
		window.addEventListener('resize', updateScrollPosition);

		return () => {
			container.removeEventListener('scroll', updateScrollPosition);
			window.removeEventListener('resize', updateScrollPosition);
		};
	}, [activeTab, filteredProjects, updateScrollPosition]); // ⭐ activeTab, filteredProjects에 따라 effect 재실행

	// 스크롤 위치에 따라 maskImage 스타일을 동적으로 생성하는 함수
	const getMaskImage = useCallback(() => {
		const container = containerRef.current;
		if (!container) return 'none';

		const { scrollWidth, clientWidth } = container;

		// 컨텐츠가 스크롤할 필요 없이 모두 보인다면 mask 필요 없음
		if (scrollWidth <= clientWidth) {
			return 'none';
		}

		// ⭐ 스크롤 위치에 따라 그라디언트 시작/끝점 색상 변경
		const leftFade = isAtStart ? 'black 15%' : 'transparent';
		const rightFade = isAtEnd ? 'black 95%' : 'transparent';

		// 5% 지점부터 95% 지점까지는 완전히 보이도록 (black)
		// 그 바깥쪽 (0-5%, 95-100%)에서 transparent/black으로 페이드 처리
		return `linear-gradient(to right, ${leftFade}, black 5%, black 90%, ${rightFade})`;
	}, [isAtStart, isAtEnd]); // isAtStart, isAtEnd 상태가 변경될 때마다 재계산

	// Get scroll amount based on screen size
	const getScrollAmount = (): number => {
		if (window.innerWidth > 1200) return 1000;  // Desktop
		if (window.innerWidth > 768) return 500;   // Tablet
		return 345;  // Mobile
	};

	// Scroll left function
	const scrollLeft = () => {
		if (containerRef.current) {
			containerRef.current.scrollBy({
				left: -getScrollAmount(),
				behavior: "smooth",
			});
			// 스크롤 후 위치 업데이트
			setTimeout(updateScrollPosition, 300); // smooth behavior에 맞춰 약간의 딜레이
		}
	};

	// Scroll right function
	const scrollRight = () => {
		if (containerRef.current) {
			containerRef.current.scrollBy({
				left: getScrollAmount(),
				behavior: "smooth",
			});
			// 스크롤 후 위치 업데이트
			setTimeout(updateScrollPosition, 300); // smooth behavior에 맞춰 약간의 딜레이
		}
	};

	// ⭐ mask style을 동적으로 적용하는 객체
	const maskStyles = !isMobile ? {
		maskImage: getMaskImage(),
		WebkitMaskImage: getMaskImage(),
		transition: 'mask-image 0.5s ease-out, -webkit-mask-image 0.5s ease-out',
	} : {}; // 모바일이면 빈 객체를 반환하여 스타일 적용 안 함

	return (
		<div id="projects" className="md:px-[5%] pt-[80px] ml:pt-[150px]">
			{/* Title Section */}
			<AnimationWrapper animationType={"scale"} delay="0.3s">
				<div className="font-bruno ml-[20px] font-bold text-4xl text-custom-purple md:text-7xl md:text-center md:ml-0">
					<h1>Projects</h1>
				</div>
			</AnimationWrapper>

			{/* Tabs Section */}
			<AnimationWrapper animationType={"scale"} delay="1s">
				<div className="flex justify-center space-x-2 md:space-x-4 mt-5 transition-all duration-300 ease-in-out">
					{tabs.map((tab) => (
						<TabButton
							key={tab}
							tab={tab}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
					))}
				</div>
			</AnimationWrapper>

			{/* Projects Container */}
			<AnimationWrapper animationType={"translateXFromLeft"} delay="0.3s">
				<div
					ref={containerRef}
					className="mb-5 p-6 flex gap-6 overflow-x-auto mx-auto w-[80%] no-scrollbar scrollbar-hide"
					style={maskStyles}
				>
					{filteredProjects.map((project) => (
						<ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
					))}
				</div>
			</AnimationWrapper>

			{/* Scroll Buttons */}
			{!isMobile && (
				<div className="relative">
					<div
						className={`
              absolute top-1/2 -translate-y-1/2 left-0
              transition-opacity duration-300 ease-in-out
              ${isAtStart ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}
					>
						<ScrollButton direction="left" onClick={scrollLeft} />
					</div>
					<div
						className={`
              absolute top-1/2 -translate-y-1/2 right-0
              transition-opacity duration-300 ease-in-out
              ${isAtEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}
					>
						<ScrollButton direction="right" onClick={scrollRight} />
					</div>
				</div>
			)}

			{/* Scroll Indicator (Mobile Only) */}

			<ScrollIndicator
				itemsCount={filteredProjects.length}
				activeIndex={activeIndex}
			/>

			{/* Modal */}
			{selectedProject && (
				<ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
			)}
		</div>
	);
};

export default Projects;