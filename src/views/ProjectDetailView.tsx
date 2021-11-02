import ImageGallery from "react-image-gallery";
import { useParams } from "react-router";
import Fade from "../components/transitions/PageFade";
import MobileShowcaseCarousel from "../components/view/ProjectDetailView/MobileShowcaseCarousel";
import ProjectInfoTile from "../components/view/ProjectDetailView/ProjectInfoTile";
import WebShowcaseCarousel from "../components/view/ProjectDetailView/WebShowcaseCarousel";
import getProjectFromId from "../helpers/getProjectFromId";
import "react-image-gallery/styles/css/image-gallery.css";
import { motion } from "framer-motion";

const ProjectDetailView: React.FC = () => {
	const { projectId } = useParams<{ projectId: string }>();
	const project = getProjectFromId(projectId);

	const mediaItems = [];
	return (
		<Fade>
			<div className="flex flex-1 flex-col lg:flex-row justify-center gap-8 3xl:gap-16 my-4 xl:mx-0 text-white">
				{project && (
					<>
						<motion.div
							initial={{ translateY: 40, opacity: 0 }}
							animate={{
								translateY: 0,
								opacity: 1,
								animationFillMode: "both",
							}}
							transition={{ duration: 0.4 }}
							className="max-w-3xl flex items-center justify-center"
						>
							<ImageGallery
								showPlayButton={false}
								showBullets={false}
								showThumbnails={false}
								items={project.media}
								autoPlay={false}
								additionalClass="shadow-xl"
							/>
						</motion.div>

						{/* {project.projectTarget === "mobile" ? (
							<MobileShowcaseCarousel />
						) : (
							<WebShowcaseCarousel />
						)} */}
						<ProjectInfoTile project={project} />
					</>
				)}
			</div>
		</Fade>
	);
};

export default ProjectDetailView;
