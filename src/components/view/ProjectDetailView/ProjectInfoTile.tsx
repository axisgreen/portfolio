import { Icons } from "../../../assets/assets";
import { IProject } from "../../../data/Projects";
import openUrlInNewTab from "../../../helpers/openUrlInNewTab";
import BackButton from "../../common/BackButton";
import Heading from "../../common/Heading";
import PrimaryButton from "../../common/PrimaryButton";
import ViewSourceButton from "../../common/ViewSourceButton";
import FadeIn from "../../framer/FadeIn";
import FadeUp from "../../framer/FadeUp";
import ProjectDescContainer from "./ProjectDescContainer";
import RelatedExperience from "./RelatedExperienceCard";
import TechUsedGroup from "./TechUsedGroup";

interface Props {
	project: IProject;
}

const ProjectInfoTile: React.FC<Props> = ({ project }) => {
	return (
		<FadeUp
			transitionDuration={0.4}
			className="bg-gray-800 shadow-xl rounded-md md:px-14 overflow-y-scroll inline self-center max-h-80v my-auto"
			style={{ height: "615px", minHeight: "615px" }}
		>
			<div className="lg:max-w-sm max-h-96">
				<div className="flex flex-col gap-4 py-10 px-8 md:px-0">
					<BackButton altBackURL="/projects" overrideDefault />
					<Heading variant="section">{project.projectName}</Heading>
					<TechUsedGroup technologiesUsed={project.technologiesUsed} />
					<FadeIn transitionDelay={0.4}>
						{project.relatedWorkExperience && (
							<RelatedExperience
								relatedExperience={project.relatedWorkExperience}
							/>
						)}
					</FadeIn>
					<FadeIn transitionDelay={0.6}>
						<ProjectDescContainer description={project.projectDescription} />
					</FadeIn>
					<FadeIn transitionDelay={0.8} className="w-full">
						{project.isDemoAvailable ? (
							<PrimaryButton
								buttonText="Live Demo"
								buttonIcon={Icons.eyeIcon}
								fullWidth
								onClick={() => openUrlInNewTab(project.liveDemoLink)}
							/>
						) : (
							<PrimaryButton buttonText="Demo Unavailable" fullWidth disabled />
						)}
					</FadeIn>
					<FadeIn transitionDelay={1}>
						{project.isOpenSource && (
							<ViewSourceButton
								buttonText="View Source"
								buttonIcon={Icons.githubIcon}
								fullWidth
								onClick={() => openUrlInNewTab(project.openSourceRepo)}
							/>
						)}
					</FadeIn>
				</div>
			</div>
		</FadeUp>
	);
};

export default ProjectInfoTile;
