import { } from "react";
import LogoThree from "./Logo3D";

const HomePage = () => {
	const url = "./assest/images/logo/3d_logo.stl";
	return (
		<div id="home" className="h-svh pt-[80px] md:pt-[120px] xl:pt-[250px] mx-[15%] bg-transparent no-scrollbar">
			<div className="flex flex-col mt-[250px] xl:mt-auto items-center xl:items-start max-w-full h-auto xl:h-[80%] z-10 pointer-events-auto">
				{/* 텍스트 영역 */}
				<div className="flex flex-col z-10">
					<h1 className="font-orbitron font-bold text-custom-purple text-[26pt] text-center xl:text-left 
          lg:text-[60pt] xl:text-[100px]">
						Taeyoon Kim
					</h1>
					<h2 className="font-bruno font-semibold text-custom-mint text-[18pt] text-center xl:text-left 
          lg:text-[30pt] xl:text-[50px]">
						a Software Engineer
					</h2>
					<p className="text-[var(--text-main)] break-words text-[12pt] text-center xl:text-left 
          lg:text-[20pt] xl:text-[25px]">
						I love to solve complex problems and make them into real products. <br />
						Also, I love to learn new things and implement them into real projects.
					</p>
				</div>
				{/* LogoThree 영역 */}
			</div>
			<div className="absolute top-[15%] md:top-[10%] right-[0%] w-[100%] md:right-[25%] md:w-[50%] h-[300px] md:h-[400px]
				xl:right-0 xl:h-[70%] xl:w-[50%] z-0 bg-transparent">
				<LogoThree url={url} />
			</div>
		</div>
	);
};

export default HomePage;
