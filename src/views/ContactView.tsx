import Heading from "../components/common/Heading";
import ContactForm from "../components/forms/ContactForm";
import PageFade from "../components/transitions/PageFade";

const ContactView: React.FC = () => {
	return (
		<PageFade>
			<div className="flex flex-col flex-1 gap-8 text-white">
				<div className="flex justify-center">
					<Heading variant="page">Contact</Heading>
				</div>
				<div className="place-self-center w-full mb-4 max-w-4xl">
					<ContactForm />
				</div>
			</div>
		</PageFade>
	);
};

export default ContactView;
