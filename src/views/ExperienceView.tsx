import { Logos } from "../assets/assets";
import JobTile from "../components/common/JobTile";
import Spacer from "../components/common/Spacer";
import Footer from "../components/layout/Footer/Footer";
import Navigation from "../components/layout/Navigation/Navigation";

const ExperienceView: React.FC = () => {
	return (
		<div className="flex flex-col min-h-screen text-white px-4 py-4">
			<Navigation />
			<div className="flex flex-col flex-1 gap-8">
				<div className="flex justify-center">
					<div className="text-4xl sm:text-5xl font-semibold">Experience</div>
				</div>
				<div className="mx-auto mb-4 ">
					<div className="flex flex-wrap bg-gray-800 shadow-xl rounded-md py-10 md:px-16 md:mx-16 justify-center">
						<div className="p-4 rounded-md">
							<JobTile
								jobTitle="Software Engineer Intern/Application Developer"
								companyName="Deakin Launchpad, Burwood, Melbourne"
								companyLogo={Logos.deakinLaunchpadLogo}
								jobStartDate="Feb 2021"
								jobEndDate="Jul 2021"
								mountExpanded={true}
								details={
									<>
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
									</>
								}
							/>
							<Spacer />
							<JobTile
								jobTitle="Full-stack Developer (Freelancer)"
								companyName="Websol Technologies, Clayton, Melbourne"
								companyLogo={Logos.websolLogo}
								jobStartDate="Jun 2020"
								jobEndDate="Dec 2020"
								details={
									<>
										<li>
											Liaising with clients to identify their requirements for a
											particular software related service
										</li>
										<li>
											Development of software solutions based on the client’s
											vision and needs
										</li>
										<li>
											Deployment of software solutions to production on the
											cloud
										</li>
										<li>Configuring and maintaining cloud environments</li>
										<li>
											Group and one-on-one training of software solutions for
											client related personnel
										</li>
									</>
								}
							/>
							<Spacer />
							<JobTile
								jobTitle="Writing Mentor (Learning Support Hub)"
								companyName="Deakin University, Burwood, Melbourne"
								companyLogo={Logos.deakinLogo}
								jobStartDate="Feb 2020"
								jobEndDate="Sept 2020"
								details={
									<>
										<li>
											Communicate with students to help them figure out how to
											solve their academic related queries
										</li>
										<li>
											Provide general help with student queries and redirecting
											to proper resources or services
										</li>
										<li>
											Allocating students to mentors and handling students,
											during busy hours
										</li>
										<li>Collaborating with other mentors as needed</li>
										<li>Reserve roster</li>
									</>
								}
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
