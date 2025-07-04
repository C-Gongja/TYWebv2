import { Experience } from "./ExperienceList";

interface MobileTimeLineProps {
	// index: number;
	item: Experience; // 너가 만든 Experience 인터페이스
}

const MobileTimelineItem = ({ item }: MobileTimeLineProps) => {
	return (
		<div className="relative mb-[50px]">
			<div className="flex items-center">
				<div className="flex items-center justify-center w-[70px] h-[70px] rounded-full">
					<img
						src={item.companyImg}
						width={120}
						height={"auto"}
						alt="logo"
						className="select-none rounded-xl"
					/>
				</div>
			</div>
			<div className="mt-1">
				<h1 className="text-[30px] text-[var(--text-main)] font-orbitron">{item.jobTitle}</h1>
				<h1 className="text-[20px] text-[var(--text-main)]"> {item.company} | {item.jobType}</h1>
				<h1 className="text-[18px] text-gray-300">{item.duration}</h1>
				<div className="mt-2">
					{item.description.map((item, index) => {
						return (
							<div key={index}>
								<li className="text-[var(--text-main)] break-words text-[18px] mb-3">{item}</li>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default MobileTimelineItem;