import { ModalProps } from "./Modals";

function Demo({ project }: ModalProps) {
	return (
		<div className="flex flex-col gap-5 text-[var(--text-main)]">
			<h1 className="text-2xl">Demo</h1>
			{project.demo && project.demo.length > 0 ? (
				<div>
					{project.demo.map((demovid, index) => (
						<video className="rounded-xl cursor-pointer" controls>
							<source key={index} src={demovid} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					))}
				</div>
			) : (
				<span>comming soon</span>
			)}

			{project.attach && project.attach.length > 0 && (
				project.attach.map((item, index) => (
					<div key={index}>
						<h2 id="" className=" text-2xl mb-5">{item.title}</h2>
						<img src={item.src} alt="" />
					</div>
				))
			)}
		</div>
	);
}

export default Demo;