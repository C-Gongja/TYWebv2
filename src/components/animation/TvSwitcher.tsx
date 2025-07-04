import { useEffect, useState } from "react";
import clsx from "clsx";

const TvSwitcher = () => {
	const [stage, setStage] = useState("idle"); // 'idle', 'start', 'expandX', 'expandY', 'done'

	useEffect(() => {
		setStage("start");

		setTimeout(() => {
			setStage("expandX");
		}, 500);

		setTimeout(() => {
			setStage("expandY");
		}, 900);
	}, []);

	return (
		<div className="fixed inset-0 z-[9999] bg-[#1e202c] flex items-center justify-center overflow-hidden">
			{/* White expanding bar */}
			<div
				className={clsx(
					"absolute bg-[#f6faff] transition-all duration-300 ease-out",
					{
						"top-1/2 left-1/2 h-[2px] w-0 -translate-x-1/2 -translate-y-1/2":
							stage === "start",
						"top-1/2 left-1/2 h-[2px] w-screen -translate-y-1/2 -translate-x-1/2":
							stage === "expandX",
						"top-0 left-0 w-screen h-screen": stage === "expandY",
					}
				)}
			></div>
		</div>
	);
};

export default TvSwitcher;
