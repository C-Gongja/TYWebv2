export interface ProjectDescriptionBodyItem {
	title: string;
	bullets: (string | { subtitle: string; subBullets: string[] })[];
}

export interface ProjectDescription {
	Intro: string;
	body: ProjectDescriptionBodyItem[];
}

export interface ProjectAttach {
	title: string;
	src: string;
}

export interface ProjectLink {
	name: string;
	url: string;
}

export interface Project {
	id: number;
	category: string;
	title: string;
	tabtitle: string;
	modaltitle: string;
	image: string | null;
	technologies: string[];
	description: ProjectDescription;
	link: ProjectLink[] | null;
	attach: ProjectAttach[] | null;
	demo: string[] | null;
}

export default interface ProjectsProps {
	projects: Project[];
}

export const projects = [
	{
		id: 8,
		category: "web",
		title: "Sharavel",
		tabtitle: "Sharavel",
		modaltitle: "Sharavel",
		image: "./assest/images/logo/logo-color.PNG",
		technologies: ["Next.js", "Springboot", "GCP", "AWS", "PostgreSQL", "zustand"],
		description: {
			Intro: [
				"Sharavel is your digital travel companion that transforms fleeting moments into lasting memories. Every sunrise in a foreign city, every conversation with a stranger, every unexpected detour that changed your perspective—these are the heartbeats of human growth.",
				"We believe that the most profound transformations happen when we step outside our comfort zones and embrace the beautiful uncertainty of exploration. This isn't just another travel app.",
				"It's a canvas for your curiosity, a sanctuary for your wanderlust, and a bridge connecting kindred spirits who understand that the best stories are written with muddy boots and open hearts.",
			],
			body: [
				{
					title: "Capture the magic of discovery. Share the thrill of the unknown.",
					bullets: [
					]
				},
				{
					title: "What Makes Sharavel Special",
					bullets: [
						{
							subtitle: "Current Features",
							subBullets: [
								"Seamless Social Integration - Jump in instantly with your favorite social platform",
								"Smart Trip Cloning - Discover amazing itineraries and make them uniquely yours with personal touches",
								"Intelligent Location Mapping - Add exciting destinations and watch your country count grow automatically",
								"Rich Storytelling Tools - Bring your adventures to life with photos, descriptions, and personal reflections",
								"Community Engagement - Connect with fellow explorers through comments and meaningful interactions",
								"Explorer Following - Build your network of inspiring travelers and discover new perspectives",
								"Personal Growth Tracking - Visualize your journey and celebrate your expanding horizons",
							]
						},
						{
							subtitle: "Coming Soon",
							subBullets: [
								"Smart Discovery Tags - Find adventures that match your soul",
								"Powerful Search Engine - Uncover hidden gems and forgotten stories",
								"Interactive Exploration Map - Your personal atlas of growth and discovery",
								"Personalized Recommendations - AI-powered suggestions based on your unique travel DNA",
								"And much more...",
							]
						},
					]
				},
				{
					title: "Future Features",
					bullets: [
						`Tags`,
						`Search`,
						`"Explore Log Map" on the profile page`,
						`Recommandation algorithm`,
						`etc.`,
					]
				},
			],
		},
		link: [],
		attach: [],
		demo: ["./assest/files/projects/sharavel/sharavel.mp4"]
	},
	{
		id: 7,
		category: "web",
		title: "HYS 25 F/W popup event",
		tabtitle: "HYS 25 F/W popup event",
		modaltitle: "HYS 25 F/W Popup Event Custom ID Card",
		image: "./assest/files/experience/hys/logo.png",
		technologies: ["React.js", "Three.js", "Firebase", "Firebase Storage", "Firestore", "Firebase Authentication", "Firebase Functions", "Firebase Hosting"],
		description: {
			Intro: `Built a full-featured web application from scratch using React.js and Firebase services for a high-traffic seasonal apparel pop-up event.`,

			body: [
				{
					title: "Roles",
					bullets: [
						`Developed a scalable web application capable of handling high traffic within a very limited budget.`,
						`Implemented a highly design-intensive front-end, translating complex UI/UX mockups into responsive, pixel-perfect components.`,
						`Collaborated closely with UI/UX designers to optimize user interaction and deliver an intuitive, engaging experience.`,
						`Designed and built a role-based admin panel with tailored interfaces and functionalities for both designers and administrators.`,
					]
				},
				{
					title: "Features",
					bullets: [
						{
							subtitle: "Customer",
							subBullets: [
								`Create a custom 3D avatar and personalized ID card.`,
								`Save personalized avatar and/or ID card for later use.`,
							]
						},
						{
							subtitle: "Manager",
							subBullets: [
								`Access and manage user-generated ID cards.`,
								`Print ID cards for physical distribution.`,
								`Add or remove admin users.`,
								`Manage avatar assets through a dedicated avatar management tool.`,
							]
						},
					]
				},
			]
		},
		link: [
			{
				name: "hys", url: "https://en.hugyourskin.kr/"
			}
		],
		attach: [],
		demo: [
			"./assest/files/projects/hys/hys-demo0.mp4",
			"./assest/files/projects/hys/hys-demo1.mp4"
		]
	},
	{
		id: 6,
		category: "web",
		title: "3D Character Generator",
		tabtitle: "3D Character Generator",
		modaltitle: "3D Character Generator",
		image: "./assest/files/projects/3d_char/3d_char_logo.png",
		technologies: ["React", "Three.js", "TypeScript", "Tailwindcss", "Node.js", "PostgreSQL", "GCS"],
		description: {
			Intro: `A prototype web application enabling interactive 3D character customization.`,
			body: [
				{
					title: "Summary",
					bullets: [
						`Designed a scalable and maintainable architecture following best practices, including Atomic Design and Zustand.`,
						`Built a RESTful API using Node.js to handle CRUD operations for efficient resource management.`,
						`SQL Query Optimization`,
						`Implemented authentication and authorization using JWT tokens to ensure secure user access.`,
						`Integrated PostgreSQL and Google Cloud Storage (GCS) for managing user data and file storage (PNG, SVG).`,
					]
				},
				{
					title: "Features",
					bullets: [
						`Sign Up & Sign In`,
						`Customizable 3D Character`,
						`Customizable User Card Information`,
						`Customizable Capture`,
						`Save`,
						`Reset`,
					],
				},
			],
		},
		link: [],
		attach: [],
		demo: ["./assest/files/projects/3d_char/3d_char.mp4"]
	},
	{
		id: 5,
		category: "ai",
		title: "F1-tenth <br> Autonomous Race Car",
		tabtitle: "F1-tenth",
		modaltitle: "1/10 Scale Autonomous Race Car",
		image: "./assest/files/projects/f1/f1_logo.png",
		technologies: ["C++", "Python", "ROS2", "SLAM", "Jetson Nano"],
		description: {
			Intro: `F1Tenth is an autonomous racing league where universities design self-driving cars to compete for the
			fastest car. For our ECS Capstone project, we collaborated with Prof. Nazari's CORE Lab to develop the
			perception and control for the lab’s race car, enabling it to autonomously navigate a race track while
			avoiding obstacles, in preparation for future F1Tenth competitions.`,

			body: [
				{
					title: "Summary",
					bullets: [
						`Developed self-driving algorithms for a one-tenth-scale autonomous race car, enabling adaptation to dynamically changing environments.`,
						`Established the first autonomous race car team at UC Davis, leading the implementation of essential
						autonomous features using ROS2 and LiDAR.`,
						`Implemented critical functionalities and autonomous algorithms in C++ and Python, including emergency
						braking, SLAM-based mapping, optimal pathfinding (pure-pursuit), obstacle detection, and obstacle
						avoidance using the gap-following algorithm.`
					]
				},
				{
					title: "Perception and Controls",
					bullets: [
						{
							subtitle: "Mapping (SLAM)",
							subBullets:
								[
									`We use SLAM (Simultaneous Localization and Mapping) to map the track before the race. The map is used
										for localization and planning during the race.`,
								]
						},
						{
							subtitle: "Raceline Optimization ",
							subBullets:
								[
									`With the map from SLAM, we generate a time optimal path around the race track using CV.`,
								]
						},
						{
							subtitle: "Particle Filter",
							subBullets:
								[
									`During the race, we use LiDAR scans and vehicle odometry to localize the car on the map.`,
								]
						},
						{
							subtitle: "Pure Pursuit",
							subBullets:
								[
									`The car is driven by a global path-tracking controller that follows the path generated by raceline
										optimization.`,
								]
						},
						{
							subtitle: "Gap Following",
							subBullets:
								[
									`When an obstacle is detected, the car switches to a local obstacle avoidance controller that steers it
									towards the largest open gap detected by the LiDAR.`,
								]
						},
					]
				}
			],
		},
		link: [{ name: "github", url: "https://github.com/C-Gongja/f1tenth_gym_ros" }],
		attach: [
			{
				title: "Hardware",
				src: "./assest/files/projects/f1/f1_hardware.png"
			}
		],
		demo: ["./assest/files/projects/f1/f1_demo.mp4"]
	},
	{
		id: 4,
		category: "ai",
		title: "Connect 4 <br> Game AI",
		tabtitle: "Connect 4 AI",
		modaltitle: "Connect 4 Game AI",
		image: "./assest/files/projects/c4/c4_card_front.png",
		technologies: ["Python", "Pygame", "Q-Learning"],
		description: {
			Intro: `Design an AI algorithm to efficiently and competitively play the game of connect-4.`,

			body: [
				{
					title: "Summary",
					bullets: [
						`Developed an AI agent for Connect 4 using the minimax algorithm (based on Q-Learning) and alpha-beta
							pruning to optimize game strategy and performance.`,

						`Designed a graphical user interface (GUI) using Pygame, providing an interactive and user-friendly
							platform for playing Connect 4.`,
					]
				},
			]
		},
		link: [{ name: "github", url: "https://github.com/C-Gongja/connect_4_ai" }],
		attach: [],
		demo: ["./assest/files/projects/c4/c4_demo.mp4"]
	},
	{
		id: 3,
		category: "ai",
		title: "Hand Gesture <br> Youtube Controller",
		tabtitle: "HGR Control",
		modaltitle: "Hand Gesture Youtube Video controller",
		image: "./assest/files/projects/hgr/hgr_front.png",
		technologies: ["Python", "Java", "Mediapipe", "OpenCV", "Tensorflow"],
		description: {
			Intro: `A YouTube Controller using hand gesture recognition, employing the MediaPipe library for Python. Use
							the pre-trained hand gesture detection (hgd) model that was initially developed by Kazuhito00.
							Developed a Java-based YouTube video controller to extract outputs from a
							Python-based HGD and integrate them seamlessly.`,

			body: [
				{
					title: "Controller Features",
					bullets: [
						{
							subtitle: "Left Hand - Video Control",
							subBullets:
								[
									`Thumbs up (left side): Rewind`,
									`Thumbs up (right side): Fast forward`,
									`All fingers spread: Pause (Spacebar)`,
									`Fist: No action`,
								]
						},
						{
							subtitle: "Right Hand - Mouse Control",
							subBullets:
								[
									`Future work.`,
								]
						},
					],
				},
				{
					title: "Summary",
					bullets: [
						`Modified an open-source hand gesture recognition system to interface with a Java application. The HGR
							model, built with Python, OpenCV, and MediaPipe, enables real-time gesture detection via a camera. The
							machine learning model, developed using TensorFlow, features a neural network trained with feedforward and
							backpropagation techniques.`,
						`Developed a user interaction software using Java and connected it to a Python hand gesture detection
							software using ProcessBuilder. I utilized threads to enable real-time operation of both software
							simultaneously as separate processes.`,
					]
				},
			]
		},
		link: [{ name: "github", url: "https://github.com/C-Gongja/hgd_youtube_controller" }],
		attach: [],
		demo: ["./assest/files/projects/hgr/hgr_youtube_controller_demo.mp4"]
	},
	{
		id: 2,
		category: "web",
		title: "X Clone",
		tabtitle: "X Clone",
		modaltitle: "X Clone",
		image: "./assest/files/projects/X_clone/X_logo.png",
		technologies: ["React", "TypeScript", "firebase"],
		description: {
			Intro: `Developed a Twitter clone using React, TypeScript, and Vite, with Firebase as the backend framework.
			Image upload functionality was not implemented due to Firebase's storage fees.`,

			body: [
				{
					title: "Features",
					bullets: [
						`Sign In & Sign Up`,
						`Post (main post at main page and post button)`,
						`Profile`,
						`Likes, Replies, Repost, and Bookmarks`,
						`Bookmarks page`,
						`Following button`,
						`Followers & Following`,
						`Following suggestions`,
					]
				},
			]
		},
		link: [{ name: "github", url: "https://github.com/C-Gongja/Twitter-Clone" }],
		attach: [],
		demo: ["./assest/files/projects/X_clone/X_clone_demo.mp4"]
	},
	{
		id: 1,
		category: "software",
		title: "Enigma Machine",
		tabtitle: "Enigma Machine",
		modaltitle: "Enigma Machine",
		image: "./assest/files/projects/enigma/em_card_front.png",
		technologies: ["C", "Data Structure", "Memory Management"],
		description: {
			Intro: `The Enigma machine is a cipher device developed and used in the early- to mid-20th century to protect
							commercial, diplomatic, and military communication. It was employed extensively by Nazi Germany during
							World War II, in all branches of the German military. The Enigma machine was considered so secure that
							it was used to encipher the most top-secret messages.
							-wikipedia-`,
			body: [
				{
					title: "Summary",
					bullets: [
						` Created an Enigma machine using C programming language that can encrypt and decrypt given strings.`,
						`I utilized various data structures and a clean system structure to make the code easily modifiable and extendabl.`,
						`Implemented the Enigma Machine using C, focusing on data structures and memory management to encrypt and decrypt messages securly from malicious attack.`,
					]
				},
				{
					title: "Enigma Machine Patway",
					bullets: [
						`Key -> Plugboard -> Rotors -> Reflector -> Rotors -> Plugboard -> Encrypt Key`,
					]
				},
			]
		},
		link: [{ name: "github", url: "https://github.com/C-Gongja/Enigma-Machine" }],
		attach: [],
		demo: ["./assest/files/projects/enigma/Enigma_demo.mov"]
	},
	{
		id: 0,
		category: "software",
		title: "BigNum Calculator",
		tabtitle: "BigNum Calculator",
		modaltitle: "BigNum Calculator",
		image: null,
		technologies: ["C", "Data Structure", "Memory Management"],
		description: {
			Intro: `We often seen fixed-precision integers. For example, int64_t, uint32_t in C/C++, i64, u32 in Rust.
							These integers have a fixed width and a limited numbers they can represent. If the number were any
							larger (or smaller), the representation is incorrect. For example, in C (uint32_t) 0xffffffff + 1 == 0.
							This may be very in-convenient and error prone when we are carrying out large scale computations.
							However, integer in Python doesn't seem to have this limitation and can represent arbitrary precisions.
							You can calculate any integer operations without worrying the upper bound or lower bound.<br>
							This caculator can computes large scale computations.`,

			body: [
				{
					title: "Summary",
					bullets: [
						`Developed a high-precision arithmetic calculator using C, with a focus on memory safety and efficient memory management.`,
						`Designed a custom data structure and constructor methods to handle arbitrary-precision integers, ensuring flexible and efficient storage of large numbers by dynamically allocating and managing memory to prevent leaks and ensure safe operations.`,
					]
				},
			]
		},
		link: [{ name: "github", url: "https://github.com/C-Gongja/BigNum-Calculator", }],
		attach: [],
		demo: []
	},
];
