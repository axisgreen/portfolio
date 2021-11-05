import { ReactImageGalleryItem } from "react-image-gallery";
import { Icons, Thumbnails } from "../assets/assets";
import ScreenshotGallery from "./ScreenshotGallery";

type Technology = {
	tooltip:
		| "Flutter"
		| "Bootstrap"
		| "Django"
		| "Python"
		| "Express.js"
		| "Bash"
		| "MongoDB"
		| "Node.js"
		| "PostgreSQL"
		| "RabbitMQ"
		| "React.js"
		| "TypeScript"
		| "JavaScript"
		| "jQuery"
		| "Amazon Web Services (AWS)"
		| "Google Cloud Platform (GCP)"
		| "DigitalOcean"
		| "Vue.js"
		| "Dart"
		| "Stripe"
		| "Heroku";
	icon: string;
};

type ProjectTarget = "mobile" | "web" | "desktop";

interface Project {
	id: string;
	projectName: string;
	projectDescription: string;
	technologiesUsed: Technology[];
	projectTarget: ProjectTarget;
	media: ReactImageGalleryItem[];
	thumbnail: string;
	relatedWorkExperience: string;
	liveDemoLink: string;
	isOpenSource: boolean;
	openSourceRepo: string;
}

const Projects: Project[] = [
	{
		id: "phantom",
		projectName: "Phantom",
		projectDescription: "desc",
		technologiesUsed: [
			{ tooltip: "Python", icon: Icons.pythonIcon },
			{ tooltip: "Django", icon: Icons.djangoIcon },
			{ tooltip: "PostgreSQL", icon: Icons.postgresIcon },
			{ tooltip: "Bootstrap", icon: Icons.bootstrapIcon },
			{ tooltip: "RabbitMQ", icon: Icons.rabbitmqIcon },
			{ tooltip: "JavaScript", icon: Icons.jsIcon },
			{ tooltip: "Vue.js", icon: Icons.vuejsIcon },
			{ tooltip: "Amazon Web Services (AWS)", icon: Icons.awsIcon },
		],
		projectTarget: "web",
		media: ScreenshotGallery.phantom,
		thumbnail: Thumbnails.phantomThumb,
		relatedWorkExperience: "Work Experience",
		liveDemoLink: "",
		isOpenSource: false,
		openSourceRepo: "https://github.com/axisgreen",
	},
	{
		id: "aims",
		projectName: "AIMS (Agent Information Management System)",
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
			{ tooltip: "Python", icon: Icons.pythonIcon },
			{ tooltip: "Django", icon: Icons.djangoIcon },
			{ tooltip: "PostgreSQL", icon: Icons.postgresIcon },
			{ tooltip: "Bootstrap", icon: Icons.bootstrapIcon },
			{ tooltip: "JavaScript", icon: Icons.jsIcon },
		],
		projectTarget: "web",
		media: ScreenshotGallery.aims,
		thumbnail: Thumbnails.aimsThumb,
		relatedWorkExperience: "Work Experience",
		liveDemoLink: "https://aims-demo.herokuapp.com/",
		isOpenSource: false,
		openSourceRepo: "https://github.com/axisgreen",
	},
	{
		id: "servo",
		projectName: "Servo",
		projectDescription: "desc",
		technologiesUsed: [
			{ tooltip: "Python", icon: Icons.pythonIcon },
			{ tooltip: "Django", icon: Icons.djangoIcon },
			{ tooltip: "PostgreSQL", icon: Icons.postgresIcon },
			{ tooltip: "Bootstrap", icon: Icons.bootstrapIcon },
			{ tooltip: "jQuery", icon: Icons.jqueryIcon },
			{ tooltip: "JavaScript", icon: Icons.jsIcon },
			{ tooltip: "DigitalOcean", icon: Icons.digitaloceanIcon },
		],
		projectTarget: "web",
		media: ScreenshotGallery.servo,
		thumbnail: Thumbnails.servoThumb,
		relatedWorkExperience: "Work Experience",
		liveDemoLink: "https://servoapp-demo.herokuapp.com/",
		isOpenSource: false,
		openSourceRepo: "https://github.com/axisgreen",
	},

	{
		id: "measureup",
		projectName: "MeasureUp",
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
			{ tooltip: "Flutter", icon: Icons.flutterIcon },
			{ tooltip: "Dart", icon: Icons.dartIcon },
			{ tooltip: "Node.js", icon: Icons.nodejsIcon },
			{ tooltip: "JavaScript", icon: Icons.jsIcon },
		],
		projectTarget: "mobile",
		media: ScreenshotGallery.measureup,
		thumbnail: Thumbnails.measureupThumb,
		relatedWorkExperience: "Work Experience",
		liveDemoLink: "",
		isOpenSource: false,
		openSourceRepo: "https://github.com/axisgreen",
	},
	{
		id: "iservice",
		projectName: "iService",
		projectDescription: "desc",
		technologiesUsed: [
			{ tooltip: "MongoDB", icon: Icons.mongodbIcon },
			{ tooltip: "Express.js", icon: Icons.expressIcon },
			{ tooltip: "React.js", icon: Icons.reactIcon },
			{ tooltip: "Node.js", icon: Icons.nodejsIcon },
			{ tooltip: "Stripe", icon: Icons.stripeIcon },
			{ tooltip: "Heroku", icon: Icons.herokuIcon },
			{ tooltip: "Google Cloud Platform (GCP)", icon: Icons.gcpIcon },
		],
		projectTarget: "web",
		media: [{ original: "https://via.placeholder.com/250x200" }],
		thumbnail: Thumbnails.iserviceThumb,
		relatedWorkExperience: "Work Experience",
		liveDemoLink: "",
		isOpenSource: false,
		openSourceRepo: "https://github.com/axisgreen",
	},
];

export interface IProject extends Project {}
export interface ITechnology extends Technology {}
export default Projects;
