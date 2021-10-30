import { Icons } from "../assets/assets";

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
		id: "test",
		projectName: "Test Project",
		projectDescription: `Project Description - Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Nihil reiciendis ratione maxime doloribus
		laborum. Incidunt minima quam in optio quas a laborum illo cumque
		nesciunt, quis consequatur id, sed doloremque! Lorem ipsum dolor
		sit amet, consectetur adipisicing elit. Incidunt voluptates
		aspernatur maxime, consequuntur optio ratione adipisci commodi
		labore eaque, ea doloribus explicabo molestiae repellat aut
		possimus cum eveniet. Consectetur, voluptatem. Lorem ipsum dolor
		sit amet consectetur adipisicing elit. Nihil reiciendis ratione
		maxime doloribus laborum. Incidunt minima quam in optio quas a
		laborum illo cumque nesciunt, quis consequatur id, sed doloremque!
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
		voluptates aspernatur maxime, consequuntur optio ratione adipisci
		commodi labore eaque, ea doloribus explicabo molestiae repellat
		aut possimus cum eveniet. Consectetur, voluptatem.`,
		technologiesUsed: [
			{ tooltip: "MongoDB", icon: Icons.mongodbIcon },
			{ tooltip: "ExpressJS", icon: Icons.expressIcon },
			{ tooltip: "ReactJS", icon: Icons.reactIcon },
			{
				tooltip: "NodeJS",
				icon: Icons.nodejsIcon,
			},
			{ tooltip: "TypeScript", icon: Icons.tsIcon },
		],
		projectTarget: "web",
		media: [],
		thumbnail: "",
		relatedWorkExperience: "",
		liveDemoLink: "nolink.linkom",
		isOpenSource: true,
		openSourceRepo: "https://github.com/axisgreen",
	},
	{
		id: "aims",
		projectName: "AIMS (Agent Information Management System)",
		projectDescription: "desc",
		technologiesUsed: [{ tooltip: "Flutter", icon: Icons.flutterIcon }],
		projectTarget: "mobile",
		media: ["screenshot.jpg", "video.gif"],
		thumbnail: "thumbnail.jpg",
		relatedWorkExperience: "Work Experience",
		liveDemoLink: "https://livedemolink.com/",
		isOpenSource: false,
		openSourceRepo: "https://github.com/someproject",
	},
];

export interface IProject extends Project {}
export default Projects;
