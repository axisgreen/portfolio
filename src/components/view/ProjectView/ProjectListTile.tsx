import Projects from "../../../data/Projects";
import ProjectCard from "../../common/ProjectCard";
import FadeUp from "../../framer/FadeUp";
import StaggeredFadeIn from "../../framer/StaggeredFadeIn";

const ProjectListTile: React.FC = () => {
	return (
		<FadeUp className="flex flex-col flex-wrap bg-gray-800 shadow-xl rounded-md px-2 py-14 md:px-16 md:mx-16">
			{Projects.map((project, i) => {
				return (
					<StaggeredFadeIn i={i} transitionDelay={0.1}>
						<ProjectCard
							key={i}
							title={project.projectName}
							description={
								project.projectDescription.find(
									(contentSection) => contentSection.title === "Summary"
								)?.content[0].data || ""
							}
							thumbnail={project.thumbnail}
							hoverImage={project.media[0].original}
							link={`/projects/${project.id}`}
						/>
					</StaggeredFadeIn>
				);
			})}
		</FadeUp>
	);
};

export default ProjectListTile;
