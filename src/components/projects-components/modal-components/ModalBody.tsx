import { ModalProps } from "./Modals";
import { IoIosLink } from "react-icons/io";

function ModalBody({ project }: ModalProps) {
	return (
		<div className="p-2 md:p-6 text-[var(--text-main)] max-w-full mx-auto">
			<div className="flex flex-col mb-6 gap-3">
				{(project.link && project.link.length > 0) &&
					(
						<>
							<span className="text-2xl font-semibold mr-3">Links</span>
							<div className="flex gap-3">
								{project.link.map((link, index) => (
									<a key={index} href={link.url} target="_blank" className="block">
										{link.name === "github" ?
											(<img
												src="./assest/images/github-mark/github.svg"
												alt="Button Image"
												className="bg-white max-w-[40px] max-h-[40px] p-[2px] md:max-w-[40px] md:max-h-[40px] md:object-contain lg:hover:scale-105 rounded-full"
											/>
											) : (
												<IoIosLink className="text-[40px] lg:text-[40px] border-2 border-[var(--text-main)] rounded-full p-1 lg:hover:scale-105" />
											)
										}
									</a>
								))}
							</div>
						</>
					)}
			</div>

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

export default ModalBody;