import { Logos } from "../assets/assets";

export interface IExperience {
	jobTitle: string;
	companyName: string;
	companyLogo: string;
	jobStartDate: string;
	jobEndDate: string;
	mountExpanded: boolean;
	details: string[];
}

const Experiences: IExperience[] = [
	{
		jobTitle: "Software Engineer Intern/Application Developer",
		companyName: "Deakin Launchpad, Burwood, Melbourne",
		companyLogo: Logos.deakinLaunchpadLogo,
		jobStartDate: "Feb 2021",
		jobEndDate: "Jul 2021",
		mountExpanded: true,
		details: [
			"Developing on both new and existing project codebases using the MERN (MongoDB, Express, React, Node.js) stack",
			" Mobile app development targeting both iOS and Android using Flutter",
			"Deploying machine learning models using Docker onto Windows and Linux stacks",
			"Modifying and integration of code using best practices to suit a project stack",
			" Collaborating with other developers using Agile methodologies and Git version control",
			" Liaising with project stakeholders on the project milestones and deliverables",
		],
	},
	{
		jobTitle: "Full-stack Developer (Freelancer)",
		companyName: "Websol Technologies, Clayton, Melbourne",
		companyLogo: Logos.websolLogo,
		jobStartDate: "Jun 2020",
		jobEndDate: "Dec 2020",
		mountExpanded: false,
		details: [
			"Liaising with clients to identify their requirements for a particular software related service",
			"Development of software solutions based on the client’s vision and needs",
			"Deployment of software solutions to production on the cloud",
			"Configuring and maintaining cloud environments",
			"Group and one-on-one training of software solutions for client  related personnel",
		],
	},
	{
		jobTitle: "Writing Mentor (Learning Support Hub)",
		companyName: "Deakin University, Burwood, Melbourne",
		companyLogo: Logos.deakinLogo,
		jobStartDate: "Feb 2020",
		jobEndDate: "Sept 2020",
		mountExpanded: false,
		details: [
			"Communicate with students to help them figure out how to solve their academic related queries",
			"Provide general help with student queries and redirecting to proper resources or services",
			"Allocating students to mentors and handling students during busy hours",
			"Collaborating with other mentors as needed",
			"Reserve roster",
		],
	},
];

export default Experiences;
