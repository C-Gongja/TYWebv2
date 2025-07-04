import { ModalProps } from "./Modals";

function ModalTitle({ project }: ModalProps) {
	return (
		<div className="text-[var(--text-main)]">
			<div className="flex flex-row gap-5 items-center">
				{project.image && (
					<img
						src={project.image}
						alt={project.title}
						className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full shadow-lg bg-[var(--theme-bg-opposite)]"
					/>
				)}
				<h2 className="text-3xl md:text-2xl lg:text-4xl font-bold ">{project.modaltitle}</h2>
				{project.githublink && (
					<a href={project.githublink} target="_blank" className="hidden md:block ">
						<img
							src="./assest/images/github-mark/github-mark.svg"
							alt="Button Image"
							className="bg-[white] max-w-[40px] max-h-[40px] p-[2px] md:max-w-[50px] md:max-h-[50px] md:object-contain transition transform hover:scale-105 rounded-full"
						/>
					</a>
				)}
			</div>
		</div>
	);
}

export default ModalTitle;