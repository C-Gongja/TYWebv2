import { ModalProps } from "./Modals";

function ModalTitle({ project }: ModalProps) {
	return (
		<div className="text-[var(--text-main)] transition-all transform duration-200">
			<div className="flex flex-row gap-5 items-center">
				{project.image && (
					<img
						src={project.image}
						alt={project.title}
						className="object-cover w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full shadow-lg bg-[var(--theme-bg)]"
					/>
				)}
				<h2 className="text-3xl md:text-2xl lg:text-4xl font-bold ">{project.modaltitle}</h2>
			</div>
		</div>
	);
}

export default ModalTitle;