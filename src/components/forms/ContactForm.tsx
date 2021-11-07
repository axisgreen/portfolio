import { motion } from "framer-motion";
import { Icons } from "../../assets/assets";
import PrimaryButton from "../common/PrimaryButton";
import InputField from "./InputField";

const ContactForm: React.FC = () => {
	// Contact form for netlify
	return (
		<motion.div
			initial={{ translateY: 40, opacity: 0 }}
			animate={{
				translateY: 0,
				opacity: 1,
			}}
			transition={{ delay: 0.2 }}
			className="flex flex-col bg-gray-800 shadow-xl rounded-md"
		>
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				className="flex flex-1"
			>
				<div className="flex flex-col flex-wrap gap-4 w-full p-6">
					<input type="hidden" name="form-name" value="contact" />
					<InputField name="name" label="Name" />
					<InputField name="email" label="E-Mail" type="email" />
					<InputField name="subject" label="Subject" />
					<InputField name="message" label="Message" isTextArea />
					<div className="my-2">
						<PrimaryButton
							buttonIcon={Icons.chevronRight}
							buttonText="Send Message"
							fullWidth
						/>
					</div>
				</div>
			</form>
		</motion.div>
	);
};

export default ContactForm;
