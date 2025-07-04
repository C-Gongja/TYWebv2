import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ExperienceList } from "./ExperienceList";
import AnimationWrapper from "../animation/AnimationWrapper";
import JobDetails from "./JobDetails";
import BulletPoint from "./BulletPoint";
import MobileTimelineItem from "./MobileTimeline";
import HorizontalLine from "./HorizontalLine";

const Experiences = () => {
	// const isMobile = window.innerWidth < 1024;
	const isMobile = useMediaQuery({ maxWidth: 1023 });
	const [selectedJob, setSelectedJob] = useState<number | null>(3);

	useEffect(() => {

	}, [isMobile]);

	const handleClick = (index: number) => {
		setSelectedJob(selectedJob === index ? null : index);
	};

	return (
		<div id="experience" className="pt-[80px] ml:pt-[150px]">
			<div className="px-[40px]
				md:px-[80px]
				lg:px-0 lg:flex lg:flex-col lg:bg-transparent lg:justify-center">
				<AnimationWrapper animationType={"scale"}>
					<h1 className="font-bruno font-bold text-custom-purple mb-10 text-4xl
						md:text-center md:text-7xl
						lg:font-bold lg:text-7xl lg:flex lg:justify-center"
					>
						Work Experience
					</h1>
				</AnimationWrapper>


				<div className="lg:relative lg:flex lg:flex-col lg:mt-[80px] lg:p-10">
					{/* 수평선 (Horizontal Line) */}
					<AnimationWrapper animationType={"translateXFromLeft"}>
						{isMobile ? null : <HorizontalLine />}
					</AnimationWrapper>

					<div className="lg:ml-20 lg:w-[70%] lg:relative lg:flex lg:justify-between">
						{isMobile ? (
							[...ExperienceList].reverse().map((item, index) => (
								<AnimationWrapper animationType={"scale"} delay="0.3s">
									<MobileTimelineItem
										key={index}
										item={item}
									/>
								</AnimationWrapper>
							))

						) : (
							ExperienceList.map((item, index) => (
								<AnimationWrapper animationType={"scale"} delay="1s">
									<BulletPoint
										key={index}
										index={index}
										item={item}
										selectedJob={selectedJob}
										handleClick={handleClick}
									/>
								</AnimationWrapper>
							))
						)
						}
					</div>
				</div>

				{/* Job Details - 전체 화면 크기로 Expand/Collapse */}
				{isMobile ? null : <JobDetails selectedJob={selectedJob} />}
			</div>
		</div>
	);
};

export default Experiences;
