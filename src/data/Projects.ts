import { ReactImageGalleryItem } from "react-image-gallery";
import { Icons, Thumbnails } from "../assets/assets";
import Experiences, { IExperience } from "./Experiences";
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

type Content = {
	type: "text" | "list";
	data: string;
};

interface ContentSection {
	title: string;
	content: Content[];
}

interface Project {
	id: string;
	projectName: string;
	projectDescription: ContentSection[];
	technologiesUsed: Technology[];
	projectTarget: ProjectTarget;
	media: ReactImageGalleryItem[];
	thumbnail: string;
	relatedWorkExperience?: IExperience;
	isDemoAvailable: boolean;
	liveDemoLink: string;
	isOpenSource: boolean;
	openSourceRepo: string;
}

const Projects: Project[] = [
	{
		id: "phantom",
		projectName: "Phantom",
		projectDescription: [
			{
				title: "Summary",
				content: [
					{
						type: "text",
						data: `An automation system built on Python, Django, PostgreSQL, RabbitMQ and Celery on the backend with the addition of the Selenium testing suite for web automation.
				 This system automates the collection, curation and submission of daily, short-medium lifespan content like localized news, to users, via SMS based applications.`,
					},
				],
			},
			{
				title: "The Problem",
				content: [
					{
						type: "text",
						data: `Prior to the conception of this application, the sourcing, curation and the submission of the message content needed to be done manually via an outdated
				web interface that didn’t allow for stockpiling or scheduling of content, instead only allowing for live messages to be sent to subscribed users (much like SMS). 
			 This meant that the process for sending messages to subscribers would take multiple hours per day, sometimes causing the content being sent to become stale. 
			 Therefore, this process was delegated to its own personnel and the applications’ operations limited to business hours.`,
					},
				],
			},
			{
				title: "The Solution",
				content: [
					{
						type: "text",
						data: `Initially, the solution for this came in the form of a simple python script that took control of a browser instance to mimic the operations that the person dedicated to this operation would do.
				However, it had multiple deficiencies, such as needing the script to be run manually each time, difficulties keeping track of successful and failed submissions, 
				needing a person to be available to run the script at specified times and to monitor the entire process to completion.`,
					},
					{
						type: "text",
						data: `Phantom is the fully featured progression of the simple python script that now addresses most of the issues that the script could not solve. 
					Mainly, it’s fully automated, accessible anywhere to its administrators, keeps track and recovers from failures (given errors are not fatal) and even scouts the internet to find localized content to be sent in the future, 
					something that was not possible using the initial script.`,
					},
				],
			},
			{
				title: "Key Features",
				content: [
					{
						type: "list",
						data: `Scouts the internet for content for submission, ingests it, then curates it based on predetermined rules, filters for not allowed content and schedules them for future submissions.`,
					},
					{
						type: "list",
						data: `Submits the scheduled content using web automation`,
					},
					{
						type: "list",
						data: `Monitors the web automation workers’ health and events. 
						It’s also able to recover from minor system failures like the submission site being unavailable.`,
					},
					{
						type: "list",
						data: `Visualizes key information using charts and metrics`,
					},
					{
						type: "list",
						data: `Sends notifications to the administrator regarding its activities throughout the day and brings certain events or requirements to attention.`,
					},
					{ type: "list", data: `Logs all application events for audit` },
				],
			},
		],
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
		isDemoAvailable: false,
		liveDemoLink: "",
		isOpenSource: false,
		openSourceRepo: "https://github.com/axisgreen",
	},
	{
		id: "aims",
		projectName: "AIMS (Agent Information Management System)",
		projectDescription: [
			{
				title: "Summary",
				content: [
					{
						type: "text",
						data: `AIMS is a KPI/target tracking and employee management software for a business outsourcing and call centre company that allows the company to gain valuable insights into its operations,
						 manage their sales agents, their metrics and payroll, all under a single centralized system. 
						 Built with Python, Django, PostgreSQL on the backend and HTML, CSS, JS and Bootstrap on the frontend.`,
					},
				],
			},
			{
				title: "The Problem",
				content: [
					{
						type: "text",
						data: `The company needed a way to simplify the process of gathering sales target data and turning it into salaries of the sales agents much simpler, 
						efficient and more accountable than maintaining a single spreadsheet being shared among the accounts department and the sales team leaders.`,
					},
				],
			},
			{
				title: "The Solution",
				content: [
					{
						type: "text",
						data: `This project allows the sales team leads to manage the sales agents’ information and track their metrics. 
						The software will then use the company’s’ business logics and parameters to calculate the salary, commissions and bonuses along with deductions, penalties and leave allowances,
						 after which a salary record will be generated with the amount payable.
						 The application also allows the agents to self-serve their information using their own dashboard.`,
					},
				],
			},
			{
				title: "Key Features",
				content: [
					{
						type: "list",
						data: `Manage sales agent information and their metrics`,
					},
					{
						type: "list",
						data: `Show insights into the agents’ performance derived using the input data`,
					},
					{
						type: "list",
						data: `Automatically generate the salaries of the employed agents using the given metrics and payslips published to the agent’s AIMS account once approved by the accounts department`,
					},
					{
						type: "list",
						data: `User account management and administrations`,
					},
					{
						type: "list",
						data: `Permission control for user accounts`,
					},
					{
						type: "list",
						data: `Generate reports regarding payroll, KPIs and other business metrics`,
					},
					{
						type: "list",
						data: `Agent’s able to access their salary slips, own metrics and employee information such as no. of leaves taken so far, on their own account without submitting a request to management.`,
					},
				],
			},
			{
				title: "Demo Credentials",
				content: [
					{
						type: "text",
						data: "Username: demo | Password: demotestpass",
					},
					{
						type: "text",
						data: "Note: Live demo might take up to 30 seconds on first load.",
					},
				],
			},
		],
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
		relatedWorkExperience: Experiences.find(
			(exp) => exp.companyName === "Websol Technologies, Clayton, Melbourne"
		),
		isDemoAvailable: true,
		liveDemoLink: "https://aims-demo.herokuapp.com/",
		isOpenSource: false,
		openSourceRepo: "https://github.com/axisgreen",
	},
	{
		id: "servo",
		projectName: "Servo",
		projectDescription: [
			{
				title: "Summary",
				content: [
					{
						type: "text",
						data: `A job/service management software built for a mechanic’s business that allows them to keep track of the customers, vehicles and records of services on the vehicles for compliance, bookkeeping and convenience reasons.
						 First project built with Python, Django, POstgreSQL on the backend and plain HTML, CSS and JS with Bootstrap on the frontend.`,
					},
				],
			},
			{
				title: "The Problem",
				content: [
					{
						type: "text",
						data: `The client needed a better, more efficient and convenient way to keep track of the vehicle information and the service records of the services he performed on his customers’ vehicles. 
						Prior to the development of this solution, they used a simple database that was created using Microsoft Access around 10 years ago by that point, which had started to show certain inefficiencies such as a dated interface,
						 unorganized/duplicate entries with different contents, misspellings and typos in the key data such as phone numbers, and names.
						  Most of all the existing solution was not accessible on the go and required the presence of the MS Access file.`,
					},
				],
			},
			{
				title: "The Solution",
				content: [
					{
						type: "text",
						data: `The solution is a web app hosted on the cloud which allows the user to keep track of the customer’s information, a record of the key vehicle information and a record of each service that is performed by the mechanic. 
						Additionally, the application also provides some quality of life improvements such as generating reports for customized reports regarding services, 
						service histories for a vehicle or a full detail of the vehicle itself, full export functionality of all data for backup, automatic backups and audit logs for each user on the app.`,
					},
				],
			},
			{
				title: "Key Features",
				content: [
					{
						type: "list",
						data: `Keep track of customers, their vehicle information and the service records`,
					},
					{
						type: "list",
						data: `Generate reports for vehicle information, service histories for a vehicle or an individual service record.`,
					},
					{
						type: "list",
						data: `Multiple points of validation and filtering/organization for data`,
					},
					{
						type: "list",
						data: `Multiple user management per instance`,
					},
					{
						type: "list",
						data: `Permission controls and audit logs for users`,
					},
				],
			},
			{
				title: "Demo Credentials",
				content: [
					{
						type: "text",
						data: "Username: demo | Password: demoaccount",
					},
					{
						type: "text",
						data: "Note: Live demo might take up to 30 seconds on first load.",
					},
				],
			},
		],
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
		relatedWorkExperience: Experiences.find(
			(exp) => exp.companyName === "Websol Technologies, Clayton, Melbourne"
		),
		isDemoAvailable: true,
		liveDemoLink: "https://servoapp-demo.herokuapp.com/",
		isOpenSource: false,
		openSourceRepo: "https://github.com/axisgreen",
	},

	{
		id: "measureup",
		projectName: "MeasureUp",
		projectDescription: [
			{
				title: "Summary",
				content: [
					{
						type: "text",
						data: `A proof of concept mobile application for a startup that uses Artificial Intelligence and images to figure out body measurements of a person. 
						The application, its designs, trademarks, branding and other related intellectual property belong to Deakin Launchpad and/or its client. 
						This multi platform native mobile application was built using Dart and Flutter (my contribution during my internship) supported by a Node.js, Hapi.js and JavaScript backend.`,
					},
				],
			},
		],
		technologiesUsed: [
			{ tooltip: "Flutter", icon: Icons.flutterIcon },
			{ tooltip: "Dart", icon: Icons.dartIcon },
			{ tooltip: "Node.js", icon: Icons.nodejsIcon },
			{ tooltip: "JavaScript", icon: Icons.jsIcon },
		],
		projectTarget: "mobile",
		media: ScreenshotGallery.measureup,
		thumbnail: Thumbnails.measureupThumb,
		relatedWorkExperience: Experiences.find(
			(exp) => exp.companyName === "Deakin Launchpad, Burwood, Melbourne"
		),
		isDemoAvailable: false,
		liveDemoLink: "",
		isOpenSource: false,
		openSourceRepo: "https://github.com/axisgreen",
	},
	{
		id: "iservice",
		projectName: "iService",
		projectDescription: [
			{
				title: "Summary",
				content: [
					{
						type: "text",
						data: `This project is related to coursework during my Bachelor of Cyber Security course. Built with React on the front end and Node.js, Express, MongoDB on the backend.`,
					},
				],
			},
			{
				title: "Key Features",
				content: [
					{
						type: "list",
						data: `API with JWT token authentication`,
					},
					{
						type: "list",
						data: `A conversational chatbot that uses WebSockets to communicate with the server and Natural Language Processing AI to come up with responses`,
					},
					{
						type: "list",
						data: `A speech-to-text feature to dictate the task description using the Web Speech API`,
					},
					{
						type: "list",
						data: `Payment integration with Stripe using implementation method for custom payment flows`,
					},
					{
						type: "list",
						data: `Google OAuth authentication support`,
					},
					{
						type: "list",
						data: `Forgot password flow`,
					},
					{
						type: "list",
						data: `Email notifications`,
					},
				],
			},
		],
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
		media: ScreenshotGallery.iservice,
		thumbnail: Thumbnails.iserviceThumb,
		isDemoAvailable: false,
		liveDemoLink: "",
		isOpenSource: false,
		openSourceRepo: "https://github.com/axisgreen",
	},
];

export interface IProject extends Project {}
export interface ITechnology extends Technology {}
export default Projects;
