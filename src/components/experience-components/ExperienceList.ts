export interface Experience {
	companyImg: string;
	jobTitle: string;
	company: string;
	jobType: string;
	year: string;
	duration: string;
	description: string[];
}


export const ExperienceList = [
	{
		companyImg: "./assest/images/logo/logo-color.PNG",
		jobTitle: "Graphic Designer",
		company: "Freelancer",
		jobType: "Design Logo and Graphics for products",
		year: "2019",
		duration: "Jan 2019 - Mar 2019",
		description: [
			"Design a company's logos and stickers that are used in restaurant's products.",
			"Use Adobe Illustrator and Photoshop as design tools."
		],
	},
	{
		companyImg: "./assest/files/experience/ecocar/logo.jpg",
		jobTitle: "V2X-Radio Engineer ",
		company: "Eco Car Davis",
		jobType: "Research Assistance",
		year: "2024",
		duration: "July 2024 - Nov 2024",
		description: [
			"Software Engineer on the Connected and Autonomous Vehicles team.",
			"Developed SSH connection and custom configuration scripts for V2X radios.",
			"Configured the V2X radios to generate a message.",
			" Utilized data transmission between receiving and sending radios using Ethernet.",
		],
	},
	{
		companyImg: "./assest/files/experience/ecocar/logo.jpg",
		jobTitle: "Simulation Engineer",
		company: "Eco Car Davis",
		jobType: "Research Assistance",
		year: "2025",
		duration: "Nov 2024 - Present",
		description: [
			"Working as a SIL and HIL simulation engineer.",
			"Configuring data transfer using Ethernet connections to ensure interaction between the simulations and various software that is required by each team.",
			"Configuring data transfer using Ethernet connections to ensure interaction between the host computer and vehicle controller.",
		],
	},
	{
		companyImg: "./assest/files/experience/hys/logo.png",
		jobTitle: "Full-stack Developer",
		company: "HugYourSkin",
		jobType: "Contract",
		year: "2025",
		duration: "Dec 2024 - Jun 2025",
		description: [
			"Developed a web application that allows users to create customizable character ID cards for the F/W season opening pop-up event.",
			"Partnered with UX/UI designers and a marketing director to create intuitive, event-tailored interfaces that enhanced user experience and engagement.",
			"Built the frontend using React.js, Three.js, TypeScript, and Tailwind CSS to enable character customization and ID card generation.",
			"Implemented backend APIs using serverless framework Firebase Functions, connecting to Firestore, Firebase Storage, and Firebase Authentication.",
			"Integrated user authentication and registration via Cafe24’s OAuth 2.0 API, allowing seamless login with the client’s existing shopping platform.",
			"Developed an admin dashboard to manage users, character assets, and generated ID cards based on roles.",
			"Deployed the application using Firebase Hosting.",
		],
	},
];