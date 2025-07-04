import { useEffect } from "react";
import { Project } from "../ProjectList";

interface ModalProps {
	project: Project;
	onClose?: () => void;
}

function ModalTitle({ project, onClose }: ModalProps) {
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
			<button
				className=" absolute top-5 right-5 text-2xl cursor-pointer"
				onClick={onClose}
			>
				✕
			</button>
		</div>
	);
}

function ModalBody({ project }: ModalProps) {
	return (
		<div className="p-2 md:p-6 text-[var(--text-main)] max-w-full mx-auto">
			{/* Intro */}
			{project.description.Intro && Array.isArray(project.description.Intro) && (
				<div className="text-lg mb-6 space-y-4">
					{project.description.Intro.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>
			)}

			{/* 상세 설명 */}
			{project.description.body.map((section, index) => (
				<div key={index} className="mb-6 text-[var(--text-main)]">
					{/* 섹션 제목 */}
					<h2 className="text-2xl font-semibold mb-3">{section.title}</h2>

					<ul className="list-disc list-inside space-y-3">
						{section.bullets.map((bullet, idx) => (
							<li key={idx} className="ml-4">
								{/* `subtitle`이 있는 경우 */}
								{typeof bullet === "object" ? (
									<>
										<span className="font-semibold text-lg"> {bullet.subtitle}</span>
										<ul className="list-circle list-inside ml-6">
											{bullet.subBullets.map((subBullet, subIdx) => (
												<li key={subIdx}>- {subBullet}</li>
											))}
										</ul>
									</>
								) : (
									bullet
								)}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

function Tags({ project }: ModalProps) {
	return (
		<div className="flex flex-wrap justify-center gap-2 m-4">
			{project.technologies.map((tech) => (
				<span key={tech} className="px-3 py-1 text-sm bg-black text-white rounded-lg shadow-lg">
					{tech}
				</span>
			))}
		</div>
	);
}

function Demo({ project }: ModalProps) {
	return (
		<div className="flex flex-col gap-5 text-[var(--text-main)]">
			{project.attach && project.attach.length > 0 && (
				project.attach.map((item, index) => (
					<div key={index}>
						<h2 id="" className=" text-2xl mb-5">{item.title}</h2>
						<img src={item.src} alt="" />
					</div>
				))
			)}

			{project.demo.length > 0 && (
				<div>
					<h1 className="text-2xl mb-5">Demo</h1>
					{project.demo.map((demovid, index) => (
						<video className="rounded-xl cursor-pointer" controls>
							<source key={index} src={demovid} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					))}
				</div>
			)}
		</div>
	);
}

function ProjectModal({ project, onClose }: ModalProps) {
	if (!project) return null;

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		// 모달이 열렸을 때 body 스크롤 비활성화
		document.body.style.overflow = "hidden";

		// 모달이 닫힐 때 원상복구
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50"
			onClick={onClose}
		>
			<div
				className="relative w-[90%] max-h-[70vh] lg:w-[80%] lg:max-h-[80vh] p-5 lg:p-10 rounded-2xl bg-[var(--theme-bg)] backdrop-blur-xl shadow-xl
        transition-discrete starting-style:open:opacity-0
        overflow-y-auto no-scrollbar
				flex flex-col
        lg:grid lgStrengthen grid-cols-2 lg:grid-rows-[0.1fr_1fr] gap-2"
				onClick={(e) => e.stopPropagation()}
			>
				{/* 모달 제목 */}
				<div className="lg:col-span-2">
					<ModalTitle project={project} onClose={onClose} />
				</div>
				{/* 모바일: 세로 배치, 데스크톱: 그리드의 첫 번째 열 */}
				<div
					className="flex flex-col pr-4 lg:overflow-y-auto no-scrollbar 
        lg:row-start-2 lg:mt-5 scrollbar-hidden
        md:flex md:flex-col"
				>
					<Tags project={project} />
					<Demo project={project} />
				</div>
				{/* 모바일: 세로 배치, 데스크톱: 그리드의 두 번째 열 */}
				<div
					className="pr-4 lg:overflow-y-auto no-scrollbar 
        lg:row-start-2 lg:mt-5 scrollbar-hidden
        md:flex md:flex-col"
				>
					<ModalBody project={project} />
				</div>
			</div>
		</div>
	);
}

export default ProjectModal;
