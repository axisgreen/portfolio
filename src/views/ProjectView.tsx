import Card from "../components/common/Card";
import Projects from "../data/Projects";

const ProjectView: React.FC = () => {
	return (
		<div className="flex flex-col flex-1 gap-8 text-white">
			<div className="flex justify-center">
				<div className="text-4xl sm:text-5xl font-semibold">Projects</div>
			</div>
			<div className="mx-auto mb-4 xl:mb-0">
				<div className="flex flex-col flex-wrap bg-gray-800 shadow-xl rounded-md py-14 md:px-16 md:mx-16">
					{Projects.map((project, i) => {
						return (
							<Card
								title={project.projectName}
								description={project.projectDescription}
								image={project.thumbnail}
								link={`/projects/${project.id}`}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectView;
