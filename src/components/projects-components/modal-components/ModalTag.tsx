import { ModalProps } from "./Modals";

function Tags({ project }: ModalProps) {
	return (
		<div className="flex flex-wrap justify-center gap-2 m-3">
			{project.technologies.map((tech) => (
				<span key={tech} className="px-3 py-1 text-sm bg-black text-white rounded-lg shadow-lg">
					{tech}
				</span>
			))}
		</div>
	);
}
export default Tags;