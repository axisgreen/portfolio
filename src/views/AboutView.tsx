import Heading from "../components/common/Heading";
import PageFade from "../components/transitions/PageFade";

const AboutView: React.FC = () => {
	return (
		<PageFade>
			<div className="flex flex-1 justify-center text-white">
				<Heading variant="page">About</Heading>
			</div>
		</PageFade>
	);
};

export default AboutView;
