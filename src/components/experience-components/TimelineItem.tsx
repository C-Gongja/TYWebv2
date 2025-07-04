import { } from "react";
import { Experience } from "./ExperienceList";

interface ExperienceProps {
	Experience: Experience;
}

export default function TimelineItem({ Experience }: ExperienceProps) {

	return (
		<>
			<img
				src={Experience.companyImg}
				width={120}
				height={"auto"}
				alt="logo"
				className="select-none rounded-xl"
			/>
			<h1 className="lg:text-[60px] text-[var(--text-main)] font-orbitron font-semibold">{Experience.jobTitle}</h1>
			<h1 className="lg:text-[30px] text-[var(--text-main)]"> {Experience.company} | {Experience.jobType}</h1>
			<h1 className="lg:text-[25px] text-gray">{Experience.duration}</h1>
			<div className="mt-2">
				{Experience.description.map((item, index) => {
					return (
						<div key={index}>
							<li className="text-[var(--text-main)] break-words text-xl mb-3">{item}</li>
						</div>
					);
				})}
			</div>
		</>
	);
}
