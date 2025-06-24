import { } from "react";
import { Project, projects } from "../projects-components/ProjectList";

interface HeaderDropdownProps {
	handleProjectClick: (project: Project) => void;
}

export function HeaderDropdown({ handleProjectClick }: HeaderDropdownProps) {

	return (
		<div>
			<ul tabIndex={0} className="dropdown-content menu bg-violet-900
			bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] backdrop-blur-xl 
			 text-white rounded-b-xl z-[1] w-60 h-auto p-5 shadow gap-3 text-lg ">
				{projects.map((project, index) => (
					<a href="#" key={index} className="hover:text-violet-300" onClick={() => handleProjectClick(project)}>
						{project.tabtitle}
					</a>
				))}
			</ul>
		</div>
	);
}