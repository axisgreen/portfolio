import Heading from "../components/common/Heading";
import PageFade from "../components/transitions/PageFade";
import ExperiencesTile from "../components/view/ExperienceView/ExperiencesTile";

const ExperienceView: React.FC = () => {
	return (
		<PageFade>
			<div className="flex flex-col flex-1 gap-8 text-white">
				<div className="flex justify-center">
					<Heading variant="page">Experience</Heading>
				</div>
				<div className="mx-auto mb-4">
					<ExperiencesTile />
				</div>
			</div>
		</PageFade>
	);
};

export default ExperienceView;
