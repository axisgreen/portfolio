import ImageGallery from "react-image-gallery";
import { useParams } from "react-router";
import PageFade from "../components/transitions/PageFade";
import ProjectInfoTile from "../components/view/ProjectDetailView/ProjectInfoTile";
import getProjectFromId from "../helpers/getProjectFromId";
import "react-image-gallery/styles/css/image-gallery.css";
import { motion } from "framer-motion";
import ScrollToTop from "../components/utility/ScrollToTop";

const ProjectDetailView: React.FC = () => {
	const { projectId } = useParams<{ projectId: string }>();
	const project = getProjectFromId(projectId);
	return (
		<PageFade>
			<ScrollToTop />
			<div className="flex flex-1 flex-col lg:flex-row justify-center items-center gap-8 3xl:gap-16 my-4 xl:mx-0 text-white">
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
								showIndex
								additionalClass="shadow-xl items-center justify-center"
							/>
						</motion.div>
						<ProjectInfoTile project={project} />
					</>
				)}
			</div>
		</PageFade>
	);
};

export default ProjectDetailView;
