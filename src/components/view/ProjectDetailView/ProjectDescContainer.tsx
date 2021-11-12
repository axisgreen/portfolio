import { ContentSection } from "../../../data/Projects";

interface Props {
	description: ContentSection[];
}

const ProjectDescContainer: React.FC<Props> = ({ description }) => {
	return (
		<div className="flex flex-col gap-8">
			{description.map((contentSection, i) => {
				return (
					<div>
						<div className="text-xl underline mb-2">{contentSection.title}</div>
						<div className="font-light text-lg flex flex-col">
							{contentSection.content.map((contentData, i) => {
								return (
									<>
										{contentData.type === "text" && (
											<div className="my-2">{contentData.data}</div>
										)}
										{contentData.type === "list" && (
											<li className="my-1">{contentData.data}</li>
										)}
									</>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectDescContainer;
