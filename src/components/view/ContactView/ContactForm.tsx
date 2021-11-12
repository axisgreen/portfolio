import { Icons } from "../../../assets/assets";
import PrimaryButton from "../../common/PrimaryButton";
import InputField from "../../forms/InputField";
import FadeUp from "../../framer/FadeUp";

const ContactForm: React.FC = () => {
	// Contact form for netlify
	return (
		<FadeUp className="flex flex-col bg-gray-800 shadow-xl rounded-md">
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				className="flex flex-1"
			>
				<div className="flex flex-col flex-wrap gap-4 w-full p-6">
					<input type="hidden" name="form-name" value="contact" />
					<InputField name="name" label="Name" isRequired />
					<InputField name="email" label="E-Mail" type="email" isRequired />
					<InputField name="subject" label="Subject" isRequired />
					<InputField name="message" label="Message" isTextArea isRequired />
					<div className="flex justify-end my-2">
						<PrimaryButton
							buttonIcon={Icons.chevronRight}
							buttonText="Send Message"
						/>
					</div>
				</div>
			</form>
		</FadeUp>
	);
};

export default ContactForm;
