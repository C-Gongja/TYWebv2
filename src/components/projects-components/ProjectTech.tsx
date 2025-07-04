import React from 'react';

interface ProjectTechnologiesProps {
	technologies: string[];
}

const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({ technologies }) => {
	const displayedTechs = technologies.slice(0, 3);
	const remainingTechsCount = technologies.length - displayedTechs.length;

	return (
		<div className='flex flex-col gap-2'>
			<div className="flex flex-wrap gap-2 justify-center">
				{displayedTechs.map((tech) => (
					<span
						key={tech}
						className="px-3 py-0.5 text-sm text-white bg-custom-mint rounded-lg font-regular"
					>
						{tech}
					</span>
				))}
			</div>
			<div className="flex flex-wrap gap-2 justify-center">
				{remainingTechsCount > 0 && (
					<span
						className="px-3 py-0.5 text-sm text-custom-mint rounded-lg font-regular"
					>
						more +{remainingTechsCount}
					</span>
				)}
			</div>
		</div>
	);
};

export default ProjectTechnologies;