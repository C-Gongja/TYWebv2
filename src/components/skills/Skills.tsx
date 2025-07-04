import AnimationWrapper from '../animation/AnimationWrapper';

const Skills = () => {
	const skills = [
		{
			"category": "Languages",
			"skills": [
				{
					"name": "C++",
					"logo": "./assest/files/skills/icons/c++/c++-96.svg"
				},
				{
					"name": "C",
					"logo": "./assest/files/skills/icons/c/c-96.svg"
				},
				{
					"name": "Java",
					"logo": "./assest/files/skills/icons/java/java-96.svg"
				},
				{
					"name": "Python",
					"logo": "./assest/files/skills/icons/python/python-96.svg"
				},
				{
					"name": "JavaScript",
					"logo": "./assest/files/skills/icons/javascript/javascript-96.svg"
				},
				{
					"name": "TypeScript",
					"logo": "./assest/files/skills/icons/typescript/typescript-96.svg"
				}
			]
		},
		{
			"category": "Front-end",
			"skills": [
				{
					"name": "HTML",
					"logo": "./assest/files/skills/icons/html/html-96.svg"
				},
				{
					"name": "CSS",
					"logo": "./assest/files/skills/icons/css/css-96.svg"
				},
				{
					"name": "React.js",
					"logo": "./assest/files/skills/icons/react/react-96.svg"
				},
				{
					"name": "NEXT.js",
					"logo": "./assest/files/skills/icons/next/next.svg"
				},
				{
					"name": "Three.js",
					"logo": "./assest/files/skills/icons/three/three.svg"
				},
				{
					"name": "Tailwind CSS",
					"logo": "./assest/files/skills/icons/tailwindcss/tailwindcss-96.svg"
				},
				{
					"name": "React Query",
					"logo": "./assest/files/skills/icons/tanstack/reactquery.svg"
				},
				{
					"name": "Zustand",
					"logo": "./assest/files/skills/icons/zustand/zustand.svg"
				},
				{
					"name": "Figma",
					"logo": "./assest/files/skills/icons/figma/figma-96.svg"
				}
			]
		},
		{
			"category": "Back-end",
			"skills": [
				{
					"name": "Firebase",
					"logo": "./assest/files/skills/icons/firebase/firebase-96.svg"
				},
				{
					"name": "SpringBoot",
					"logo": "./assest/files/skills/icons/springboot/springboot-96.svg"
				},
				{
					"name": "Node.js",
					"logo": "./assest/files/skills/icons/nodejs/nodejs-96.svg"
				},
				{
					"name": "Express",
					"logo": "./assest/files/skills/icons/express/express.svg"
				},
				{
					"name": "PostgreSQL",
					"logo": "./assest/files/skills/icons/postgresql/postgresql-96.svg"
				},
				{
					"name": "MySQL",
					"logo": "./assest/files/skills/icons/mysql/mysql-96.svg"
				}
			]
		},
		{
			"category": "Developer Tools",
			"skills": [
				{
					"name": "Git",
					"logo": "./assest/files/skills/icons/git/git-96.svg"
				},
				{
					"name": "Docker",
					"logo": "./assest/files/skills/icons/docker/docker-96.svg"
				},
				{
					"name": "GCP",
					"logo": "./assest/files/skills/icons/googlecloud/googlecloud-96.svg"
				},
				{
					"name": "AWS",
					"logo": "./assest/files/skills/icons/aws/aws-96.svg"
				},
				{
					"name": "Postman",
					"logo": "./assest/files/skills/icons/postman/postman.svg"
				}
			]
		},
		{
			"category": "etc.",
			"skills": [
				{
					"name": "MATLAB",
					"logo": "./assest/files/skills/icons/matlab/matlab-96.svg"
				},
				{
					"name": "ROS2"
				},
				{
					"name": "SLAM",
				},
				{
					"name": "Pandas",
				},
				{
					"name": "NumPy",
				},
				{
					"name": "Matplotlib",
				},
				{
					"name": "OpenCV",
				},
				{
					"name": "MediaPipe",
				}
			]
		}
	];

	return (
		<section id="skills" className="pt-[80px] ml:pt-[150px] px-[40px] ml:px-0 xl:mx-[15%]">
			<div className="container mx-auto">
				<AnimationWrapper animationType={"scale"} delay="0.3s">
					<h1 className="font-bruno font-bold text-custom-purple mb-10 text-4xl
					md:text-center md:text-7xl
					lg:font-bold lg:text-7xl lg:flex lg:justify-center"
					>
						Technical Skills
					</h1>
				</AnimationWrapper>
				<div className="flex flex-col gap-8">
					{skills.map((skillCategory, index) => (
						<div
							key={index}
							// bg-[#d9d9d91f] backdrop-blur-xl rounded-lg shadow-lg hover:shadow-xl
							className="py-6 transition-shadow duration-300"
						>
							<AnimationWrapper animationType={"translateXFromLeft"} delay="0.1s">
								<h3 className="font-orbitron text-2xl font-semibold mb-6 text-custom-mint">
									{skillCategory.category}
								</h3>
							</AnimationWrapper>
							<div className="lg:ml-32 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-12 gap-4">
								{skillCategory.skills.map((skill, skillIndex) => (
									<AnimationWrapper animationType={"scale"} delay="0.7s">
										<div
											key={skillIndex}
											className="flex flex-col justify-end items-center py-2 px-3 rounded-md w-auto 
											transform hover:scale-105 transition-transform duration-200 min-h-[100px]"
										>
											{skill.logo ? (
												<div className='flex justify-center items-center'>
													<img
														src={skill.logo}
														alt={`${skill.name} logo`}
														className="w-12 h-auto object-contain"
													/>
												</div>
											) : (<></>)}
											<span className="text-base lg:text-xl font-medium text-[var(--text-main)] flex justify-center items-baseline">
												{skill.name}
											</span>
										</div>
									</AnimationWrapper>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;