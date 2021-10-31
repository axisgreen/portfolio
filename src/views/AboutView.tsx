import Heading from "../components/common/Heading";
import Fade from "../components/transitions/PageFade";

const AboutView: React.FC = () => {
	return (
		<Fade>
			<div className="flex flex-1 justify-center text-white">
				<Heading variant="page">About</Heading>
			</div>
		</Fade>
	);
};

export default AboutView;
