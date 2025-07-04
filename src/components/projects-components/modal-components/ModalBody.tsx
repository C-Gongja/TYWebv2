import { ModalProps } from "./Modals";

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

export default ModalBody;