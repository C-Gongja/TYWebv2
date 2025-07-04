import ProjectImage from "./ProjectImage";
import { Project } from "./ProjectList";
import ProjectTechnologies from "./ProjectTech";

interface ProjectCardProps {
	project: Project;
	onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
	<div
		className="relative group min-w-[16.5rem] lg:min-w-[20rem] rounded-xl cursor-pointer
			transition-all duration-300 ease-in-out overflow-hidden
      bg-gradient-to-t dark:from-[#d9d9d91c] dark:to-[#d9d9d950]
			from-[#0000001c] to-[#00000050]
			hover:scale-105
      lg:hover:shadow-md"
		onClick={onClick}
	>
		<ProjectImage image={project.image} title={project.title} />
		<div className="flex flex-col gap-4 p-5 min-h-[220px]">
			<h2
				className="text-2xl font-orbitron font-bold text-[var(--text-main)] min-h-[100px] text-center"
				dangerouslySetInnerHTML={{ __html: project.title }}
			/>
			<ProjectTechnologies technologies={project.technologies} />
		</div>
	</div>
);

export default ProjectCard;