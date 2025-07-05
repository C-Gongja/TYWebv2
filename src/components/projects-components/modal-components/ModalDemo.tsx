import { ModalProps } from "./Modals";

function Demo({ project }: ModalProps) {
	return (
		<div className="flex flex-col gap-10 text-[var(--text-main)]">
			<div>
				<h1 className="text-2xl mb-3">Demo</h1>
				{project.demo && project.demo.length > 0 ? (
					<div className="flex flex-col gap-3">
						{project.demo.map((demovid, index) => (
							<video className="rounded-xl cursor-pointer" controls>
								<source key={index} src={demovid} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						))}
					</div>
				) : (
					<span>coming soon</span>
				)}
			</div>

			<div>
				{project.attach && project.attach.length > 0 && (
					project.attach.map((item, index) => (
						<div key={index}>
							<h2 id="" className=" text-2xl mb-3">{item.title}</h2>
							<img src={item.src} alt="" />
						</div>
					))
				)}
			</div>
		</div>
	);
}

export default Demo;