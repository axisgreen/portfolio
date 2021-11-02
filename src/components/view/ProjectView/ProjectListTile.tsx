import { motion } from "framer-motion";
import Projects from "../../../data/Projects";
import ProjectCard from "../../common/ProjectCard";

const ProjectListTile: React.FC = () => {
	return (
		<motion.div
			initial={{ translateY: 40, opacity: 0 }}
			animate={{
				translateY: 0,
				opacity: 1,
			}}
			transition={{ delay: 0.2 }}
			className="flex flex-col flex-wrap bg-gray-800 shadow-xl rounded-md px-2 py-14 md:px-16 md:mx-16"
		>
			{Projects.map((project, i) => {
				return (
					<motion.div
						key={i}
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
						}}
						transition={{ delay: 0.1 * i }}
					>
						<ProjectCard
							key={i}
							title={project.projectName}
							description={project.projectDescription}
							thumbnail={project.thumbnail}
							hoverImage={project.media[0].original}
							link={`/projects/${project.id}`}
						/>
					</motion.div>
				);
			})}
		</motion.div>
	);
};

export default ProjectListTile;
