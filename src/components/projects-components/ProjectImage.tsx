import React from 'react';

interface ProjectImageProps {
	image?: string | null;
	title: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ image, title }) => (
	<div className="overflow-hidden bg-white p-5 pointer-events-none">
		{image ? (
			<img
				src={image}
				alt={title}
				className="w-full h-[200px] object-contain"
			/>
		) : (
			<div className="flex items-center justify-center h-[200px]">
				<span className="text-xl font-orbitron font-bold text-black text-center">
					{title}
				</span>
			</div>
		)}
	</div>
);

export default ProjectImage;