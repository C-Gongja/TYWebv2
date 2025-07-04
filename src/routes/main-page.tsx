import { } from "react";
import HomePage from "../components/main-components/Homepage";
import Experiences from "../components/experience-components/Experiences";
import Projects from "../components/projects-components/Projects";
import ContactForm from "../components/contact/Contact";
import Skills from "../components/skills/Skills";

const MainPage = () => {
	return (
		<main className="no-scrollbar">
			<HomePage />
			<Skills />
			<Experiences />
			<Projects />
			<ContactForm />
		</main>
	);
};

export default MainPage;
