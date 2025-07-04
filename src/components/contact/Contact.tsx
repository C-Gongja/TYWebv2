import { useState, useCallback } from "react";
import AnimationWrapper from "../animation/AnimationWrapper";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<AnimationWrapper animationType="scale" delay="0.3s">
		{children}
	</AnimationWrapper>
);

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const { name, email, message } = formData;

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}, []);

	return (
		<section id="contact" className="pt-[80px] ml:pt-[150px] bg-transparent px-[40px] md:px-[15%] ">
			<AnimatedSection>
				<h1 className="font-bruno font-bold text-6xl text-custom-purple md:text-7xl md:text-center md:ml-0">Contact</h1>
			</AnimatedSection>

			<AnimatedSection>
				<div className="shadow-lg rounded-lg p-[20px] mt-[50px] mx-auto
					bg-gradient-to-t from-[#d9d9d91c] to-[#d9d9d950] backdrop-blur-lg">
					<form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col space-y-4 font-orbitron">
						<input type="hidden" name="access_key" value="d9a8aa49-a719-4f46-9927-a0dfc0cadd8f" />

						<InputField label="NAME" type="text" name="name" value={name} onChange={handleChange} />
						<InputField label="E-MAIL" type="email" name="email" value={email} onChange={handleChange} />
						<TextareaField label="MESSAGE" name="message" value={message} onChange={handleChange} />

						<button
							type="submit"
							className="w-full bg-custom-purple hover:bg-violet-800 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-all"
						>
							<span className="font-orbitron text-lg">SEND</span>
						</button>
					</form>
				</div>
			</AnimatedSection>
		</section>
	);
};

export default ContactForm;