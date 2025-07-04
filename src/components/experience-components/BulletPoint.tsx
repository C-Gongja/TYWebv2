import { Experience } from "./ExperienceList";

interface BulletPointProps {
	index: number;
	item: Experience; // 너가 만든 Experience 인터페이스
	selectedJob: number | null;
	handleClick: (index: number) => void;
}

/* ✅ Bullet Point 컴포넌트 */
const BulletPoint = ({ index, item, selectedJob, handleClick }: BulletPointProps) => {
	const isSelected = index === selectedJob;

	return (
		<div
			onClick={() => handleClick(index)}
			className={`text-custom-mint lg:relative lg:flex lg:flex-col lg:items-center lg:cursor-pointer lg:transition lg:transform lg:hover:scale-105 lg:hover:z-5
				${isSelected ? "lg:scale-125 lg:hover:scale-125" : ""}`}
		>
			{/* Job Title */}
			<h2 className="font-orbitron lg:absolute lg:bottom-10 lg:w-[120px] lg:text-xl lg:font-semibold lg:text-center lg:whitespace-normal lg:leading-tight">
				{item.jobTitle}
			</h2>

			{/* Larger clickable area for bullet points */}
			<div className="lg:absolute lg:-top-6 lg:w-[100px] lg:h-10" />

			{/* Bullet point */}
			<div className="lg:absolute lg:-top-4 lg:w-6 lg:h-6 lg:bg-cyan-400 lg:rounded-full" />

			{/* Ping effect on selected */}
			{isSelected && (
				<div className="lg:absolute lg:-top-5 lg:w-8 lg:h-8 lg:bg-cyan-400 lg:rounded-full animate-ping" />
			)}

			{/* Year */}
			<p className="font-orbitron lg:absolute lg:top-5 lg:text-2xl lg:font-semibold">
				{item.year}
			</p>
		</div>
	);
};

export default BulletPoint;