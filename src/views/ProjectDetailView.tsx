import { useParams } from "react-router";
import Fade from "../components/transitions/PageFade";
import MobileShowcaseCarousel from "../components/view/ProjectDetailView/MobileShowcaseCarousel";
import ProjectInfoTile from "../components/view/ProjectDetailView/ProjectInfoTile";
import WebShowcaseCarousel from "../components/view/ProjectDetailView/WebShowcaseCarousel";
import getProjectFromId from "../helpers/getProjectFromId";

const ProjectDetailView: React.FC = () => {
	const { projectId } = useParams<{ projectId: string }>();
	const project = getProjectFromId(projectId);
	return (
		<Fade>
			<div className="flex flex-1 flex-col lg:flex-row justify-center sm:gap-8 3xl:gap-16 my-4 xl:mx-0 text-white">
				{project && (
					<>
						{project.projectTarget === "mobile" ? (
							<MobileShowcaseCarousel />
						) : (
							<WebShowcaseCarousel />
						)}
						<ProjectInfoTile project={project} />
					</>
				)}
			</div>
		</Fade>
	);
};

export default ProjectDetailView;
