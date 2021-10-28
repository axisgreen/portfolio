type Technology = {
	tooltip:
		| "Flutter"
		| "Bootstrap"
		| "Django"
		| "Python"
		| "ExpressJS"
		| "Bash"
		| "MongoDB"
		| "NodeJS"
		| "PostgreSQL"
		| "RabbitMQ"
		| "ReactJS"
		| "TypeScript"
		| "JavaScript";
	icon: string;
};

type ProjectTarget = "mobile" | "web" | "desktop";

interface Project {
	id: string;
	projectName: string;
	projectDescription: string;
	technologiesUsed: Technology[];
	projectTarget: ProjectTarget;
	media: string[];
	thumbnail: string;
	relatedWorkExperience: string;
	liveDemoLink: string;
	isOpenSource: boolean;
	openSourceRepo: string;
}

const Projects: Project[] = [
	{
		id: "aims",
		projectName: "AIMS (Agent Information Management System)",
		projectDescription: "desc",
		technologiesUsed: [{ tooltip: "Flutter", icon: "./someicon.svg" }],
		projectTarget: "mobile",
		media: ["screenshot.jpg", "video.gif"],
		thumbnail: "thumbnail.jpg",
		relatedWorkExperience: "Work Experience",
		liveDemoLink: "https://livedemolink.com/",
		isOpenSource: false,
		openSourceRepo: "https://github.com/someproject",
	},
];

export default Projects;
