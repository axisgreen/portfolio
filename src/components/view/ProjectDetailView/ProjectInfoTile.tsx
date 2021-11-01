import { motion } from "framer-motion";
import { useContext } from "react";
import { Icons } from "../../../assets/assets";
import { ViewportContext } from "../../../contexts/ViewportContext";
import { IProject } from "../../../data/Projects";
import openUrlInNewTab from "../../../helpers/openUrlInNewTab";
import Heading from "../../common/Heading";
import PrimaryButton from "../../common/PrimaryButton";
import ViewSourceButton from "../../common/ViewSourceButton";
import TechUsedGroup from "./TechUsedGroup";

interface Props {
	project: IProject;
}

const ProjectInfoTile: React.FC<Props> = ({ project }) => {
	const { height } = useContext(ViewportContext);
	// Sets the min height for the project info tile if the screen is taller than convention
	const minHeightForTallScreens =
		height > 1080 ? "sm:min-h-63v" : "sm:min-h-80v";

	return (
		<motion.div
			initial={{ translateY: 40, opacity: 0 }}
			animate={{
				translateY: 0,
				opacity: 1,
				animationFillMode: "both",
			}}
			transition={{ duration: 0.4, delay: 0.2 }}
			className={`bg-gray-800 shadow-xl rounded-md md:px-14 overflow-y-scroll inline self-center ${minHeightForTallScreens} max-h-80v 3xl:min-h-63v 3xl:max-h-63v my-auto`}
		>
			<div className="lg:max-w-sm max-h-96">
				<div className="flex flex-col gap-4 py-10 px-10 md:px-0">
					<Heading variant="section">{project.projectName}</Heading>
					<TechUsedGroup technologiesUsed={project.technologiesUsed} />

					<div className="p-4 border rounded-md hover:bg-white hover:text-black transition-all">
						Related to Work Experience
					</div>

					<div>{project.projectDescription}</div>

					<PrimaryButton
						buttonText="Live Demo"
						buttonIcon={Icons.eyeIcon}
						onClick={() => openUrlInNewTab(project.liveDemoLink)}
					/>
					{project.isOpenSource && (
						<ViewSourceButton
							buttonText="View Source"
							buttonIcon={Icons.githubIcon}
							onClick={() => openUrlInNewTab(project.openSourceRepo)}
						/>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectInfoTile;
