import PageFade from "../components/transitions/PageFade";
import Heading from "../components/common/Heading";
import ProjectListTile from "../components/view/ProjectView/ProjectListTile";

const ProjectView: React.FC = () => {
	return (
		<PageFade>
			<div className="flex flex-col flex-1 gap-8 text-white">
				<div className="flex justify-center">
					<Heading variant="page">Projects</Heading>
				</div>
				<div className="mx-auto mb-4 max-w-7xl">
					<ProjectListTile />
				</div>
			</div>
		</PageFade>
	);
};

export default ProjectView;
