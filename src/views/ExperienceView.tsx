import { Logos } from "../assets/assets";
import JobAccordion from "../components/common/JobAccordion";
import Spacer from "../components/common/Spacer";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const ExperienceView: React.FC = () => {
	return (
		<div className="flex flex-col min-h-screen text-white px-4 py-4">
			<Navigation />
			<div className="flex flex-col flex-1 gap-8">
				<div className="flex justify-center">
					<div className="text-5xl font-semibold">Experience</div>
				</div>
				<div className="mx-auto mb-4 xl:mb-0">
					<div className="flex flex-wrap bg-gray-800 shadow-xl rounded-md py-10 md:px-16 md:mx-16 justify-center">
						<div className="p-4 rounded-md">
							<JobAccordion
								jobTitle="Software Engineer Intern/Application Developer"
								companyName="Deakin Launchpad, Burwood, Melbourne"
								companyLogo={Logos.deakinLaunchpadLogo}
								jobStartDate="Feb 2021"
								jobEndDate="Jul 2021"
								details={
									<div>
										<li>
											Developing on both new and existing project codebases
											using the MERN (MongoDB, Express, React, Node.js) stack
										</li>
										<li>
											Mobile app development targeting both iOS and Android
											using Flutter
										</li>
										<li>
											Deploying machine learning models using Docker onto
											Windows and Linux stacks
										</li>
										<li>
											Modifying and integration of code using best practices to
											suit a project stack
										</li>
										<li>
											Collaborating with other developers using Agile
											methodologies and Git version control
										</li>
										<li>
											Liaising with project stakeholders on the project
											milestones and deliverables
										</li>
										<li>Internship</li>
									</div>
								}
							/>
							<Spacer />
							<JobAccordion
								jobTitle="Full-stack Developer"
								companyName="Websol Technologies, Clayton, Melbourne"
								companyLogo={Logos.websolLogo}
								jobStartDate="Jun 2020"
								jobEndDate="Dec 2020"
								details={<></>}
							/>
							<Spacer />
							<JobAccordion
								jobTitle="Writing Mentor (Learning Support Hub)"
								companyName="Deakin University, Burwood, Melbourne"
								companyLogo={Logos.deakinLogo}
								jobStartDate="Feb 2020"
								jobEndDate="Sept 2020"
								details={<></>}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ExperienceView;
