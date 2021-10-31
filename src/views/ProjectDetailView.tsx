import { useParams } from "react-router";
import MobileShowcaseCarousel from "../components/view/ProjectDetailView/MobileShowcaseCarousel";
import ProjectInfoTile from "../components/view/ProjectDetailView/ProjectInfoTile";
import WebShowcaseCarousel from "../components/view/ProjectDetailView/WebShowcaseCarousel";
import getProjectFromId from "../helpers/getProjectFromId";

const ProjectDetailView: React.FC = () => {
	const { projectId } = useParams<{ projectId: string }>();
	const project = getProjectFromId(projectId);
	return (
		<div className="flex flex-1 flex-col-reverse lg:flex-row justify-center gap-8 3xl:gap-16 my-4 xl:mx-0 text-white">
			{project && (
				<>
					<ProjectInfoTile project={project} />
					{project.projectTarget === "mobile" ? (
						<MobileShowcaseCarousel />
					) : (
						<WebShowcaseCarousel />
					)}
				</>
			)}
		</div>
	);
};

export default ProjectDetailView;
