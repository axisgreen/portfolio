import { motion } from "framer-motion";
import { Icons } from "../../../assets/assets";
import { IProject } from "../../../data/Projects";
import openUrlInNewTab from "../../../helpers/openUrlInNewTab";
import BackButton from "../../common/BackButton";
import Heading from "../../common/Heading";
import PrimaryButton from "../../common/PrimaryButton";
import ViewSourceButton from "../../common/ViewSourceButton";
import TechUsedGroup from "./TechUsedGroup";

interface Props {
	project: IProject;
}

const ProjectInfoTile: React.FC<Props> = ({ project }) => {
	return (
		<motion.div
			initial={{ translateY: 40, opacity: 0 }}
			animate={{
				translateY: 0,
				opacity: 1,
				animationFillMode: "both",
			}}
			transition={{ duration: 0.4, delay: 0.2 }}
			className={`bg-gray-800 shadow-xl rounded-md md:px-14 overflow-y-scroll inline self-center max-h-80v my-auto`}
			style={{ height: "615px", minHeight: "615px" }}
		>
			<div className="lg:max-w-sm max-h-96">
				<div className="flex flex-col gap-4 py-10 px-8 md:px-0">
					<div>
						<BackButton altBackURL="/projects" overrideDefault />
					</div>
					<Heading variant="section">{project.projectName}</Heading>
					<TechUsedGroup technologiesUsed={project.technologiesUsed} />

					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
						}}
						transition={{ delay: 0.4 }}
					>
						{project.relatedWorkExperience && (
							<div className="flex justify-between items-center p-4 border rounded-md hover:bg-white hover:text-black transition-all">
								<div className="flex flex-col">
									<div className="font-semibold">
										{project.relatedWorkExperience.jobTitle}
									</div>
									<div className="text-xs">
										{project.relatedWorkExperience.companyName}
									</div>
								</div>
								<div>
									<img
										src={project.relatedWorkExperience.companyLogo}
										alt="Company Logo"
										width="40px"
										height="40px"
										className="bg-white rounded-md p-1"
									/>
								</div>
							</div>
						)}
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
					>
						<div className="flex flex-col gap-8">
							{project.projectDescription.map((contentSection, i) => {
								return (
									<div>
										<div className="text-xl underline mb-2">
											{contentSection.title}
										</div>
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
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8 }}
						className="w-full"
					>
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
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
					>
						{project.isOpenSource && (
							<ViewSourceButton
								buttonText="View Source"
								buttonIcon={Icons.githubIcon}
								fullWidth
								onClick={() => openUrlInNewTab(project.openSourceRepo)}
							/>
						)}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectInfoTile;
