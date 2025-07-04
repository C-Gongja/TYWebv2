import { useEffect } from "react";
import { Project } from "../ProjectList";
import ModalBody from "./ModalBody";
import Demo from "./ModalDemo";
import Tags from "./ModalTag";
import ModalTitle from "./ModalTitle";

export interface ModalProps {
	project: Project;
	onClose?: () => void;
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
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
			onClick={onClose}
		>
			<div
				className="relative w-[90%] max-h-[70vh] lg:w-[80%] lg:max-h-[85vh] bg-[var(--theme-bg)] p-6 
				lg:p-10 rounded-2xl shadow-xl transition-opacity duration-300 overflow-hidden"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					className="absolute top-3 right-3 text-2xl text-[var(--text-main)] hover:text-red-400 transition"
					onClick={onClose}
				>
					✕
				</button>

				{/* Modal Content */}
				<div
					className="w-full max-h-[65vh] lg:max-h-[85vh] overflow-y-auto no-scrollbar  
					grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-6"
				>
					{/* Title (Full Width) */}
					<div className="lg:col-span-2">
						<ModalTitle project={project} />
					</div>

					{/* Left Side Content */}
					<div className="flex flex-col gap-4 overflow-visible lg:overflow-y-auto lg:pr-2 lg:max-h-[80vh] lg:no-scrollbar ">
						<Tags project={project} />
						<Demo project={project} />
					</div>

					{/* Right Side Content */}
					<div className="flex flex-col gap-4 overflow-visible lg:overflow-y-auto lg:pr-2 lg:max-h-[80vh] lg:no-scrollbar">
						<ModalBody project={project} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectModal;
