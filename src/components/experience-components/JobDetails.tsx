import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TimelineItem from "./TimelineItem";
import { ExperienceList } from "./ExperienceList";

interface JobDetailsProps {
	// index: number;
	// item: Experience;
	selectedJob: number | null;
	// handleClick: (index: number) => void;
}

/* ✅ Job Details (w-screen에서 Expand/Collapse) */
const JobDetails = ({ selectedJob }: JobDetailsProps) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);
	const [hasBeenInView, setHasBeenInView] = useState(false); // 최초 감지 여부

	const isInView = useInView(wrapperRef, { margin: "-50px" });

	// 최초 inView 감지 시 한 번만 실행
	useEffect(() => {
		if (isInView && !hasBeenInView) setHasBeenInView(true);
	}, [isInView, hasBeenInView]);

	useEffect(() => {
		if (contentRef.current && hasBeenInView) {
			// 선택된 Job이 있을 경우 -> Expand
			if (selectedJob !== null) {
				setTimeout(() => {
					setHeight(contentRef.current?.scrollHeight || 0);
				}, 300); // DOM 업데이트 후 반영되도록 setTimeout 추가
			} else {
				// 선택된 Job이 없을 경우 -> Collapse
				setHeight(0);
			}
		}
	}, [selectedJob, hasBeenInView]);

	return (
		<div ref={wrapperRef}
			className="lg:flex lg:justify-center lg:w-screen lg:mt-[50px] lg:mb-[100px] ">
			<div
				className="lg:overflow-hidden lg:transition-all lg:duration-500 lg:ease-in-out lg:w-screen 
				lg:bg-[var(--project-bg)] lg:shadow-[inset_0px_0px_45px_-10px_#110826]"
				style={{ height: `${height}px` }}
			>
				<div ref={contentRef} className="lg:px-[250px] lg:py-[50px]">
					{selectedJob !== null && (
						<TimelineItem Experience={ExperienceList[selectedJob]} />
					)}
				</div>
			</div>
		</div>
	);
};

export default JobDetails;