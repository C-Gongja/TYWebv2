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
		companyImg: "/assest/images/logo/logo-color.PNG",
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
		companyImg: "/assest/files/experience/ecocar/logo.jpg",
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
		companyImg: "/assest/files/experience/ecocar/logo.jpg",
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
		companyImg: "/assest/images/logo/logo-color.PNG",
		jobTitle: "Software Engineer",
		company: "Freelancer",
		jobType: "Customizable 3D Character Page",
		year: "2025",
		duration: "Dec 2024 - Present",
		description: [
			"Developing a page that provides customizable 3d character for user",
			"Updates character data to existing user data",
		],
	},
];