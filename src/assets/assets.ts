import { ReactImageGalleryItem } from "react-image-gallery";

// Icons
import bootstrapIcon from "./icons/bootstrap-icon.svg";
import djangoIcon from "./icons/djangoproject-icon.svg";
import expressIcon from "./icons/expressjs-icon.svg";
import flutterIcon from "./icons/flutterio-icon.svg";
import githubIcon from "./icons/github-brands.svg";
import bashIcon from "./icons/bash-icon.svg";
import menuIcon from "./icons/menu-icon.svg";
import mongodbIcon from "./icons/mongodb-icon.svg";
import nodejsIcon from "./icons/nodejs-icon.svg";
import postgresIcon from "./icons/postgresql-icon.svg";
import pythonIcon from "./icons/python-icon.svg";
import rabbitmqIcon from "./icons/rabbitmq-icon.svg";
import reactIcon from "./icons/reactjs-icon.svg";
import tsIcon from "./icons/typescriptlang-icon.svg";
import jsIcon from "./icons/javascript-icon.svg";
import linkedinIcon from "./icons/linkedin-brands.svg";
import closeIcon from "./icons/close-icon.svg";
import chevronRight from "./icons/chevron-right.svg";
import chevronLeft from "./icons/chevron-left.svg";
import jqueryIcon from "./icons/jquery-icon.svg";
import awsIcon from "./icons/aws-icon.svg";
import gcpIcon from "./icons/gcp-icon.svg";
import digitaloceanIcon from "./icons/digitalocean-icon.svg";
import vuejsIcon from "./icons/vuejs-icon.svg";
import dartIcon from "./icons/dartlang-icon.svg";
import stripeIcon from "./icons/stripe-icon.svg";
import herokuIcon from "./icons/heroku-icon.svg";

import mailIcon from "./icons/mail-icon.svg";
import eyeIcon from "./icons/eye.svg";

// Backgrounds
import waveV1 from "./backgrounds/wave-haikei-v1.svg";
import waveV2 from "./backgrounds/wave-haikei-v2.svg";
import waveV3 from "./backgrounds/wave-haikei-v3.svg";
import waveV4 from "./backgrounds/wave-haikei-v4.svg";

// My Logo (special case)
import { ReactComponent as MyLogo } from "./logo.svg";

// Logos
import deakinLogo from "./logos/deakin.svg";
import deakinLaunchpadLogo from "./logos/launchpad.jpg";
import websolLogo from "./logos/websol.svg";
import aimsLogo from "./logos/aims-logo.svg";

// Project Thumbnails
import aimsThumb from "./projects/thumbnails/aims-thumb.svg";
import servoThumb from "./projects/thumbnails/servo-thumb.svg";
import phantomThumb from "./projects/thumbnails/phantom-thumb.svg";
import measureupThumb from "./projects/thumbnails/measureup-thumb.svg";
import iserviceThumb from "./projects/thumbnails/iservice-thumb.svg";

// Project Media
import aims1 from "./projects/aims/1.png";

import aims3 from "./projects/aims/3.png";
import aims4 from "./projects/aims/4.png";
import aims5 from "./projects/aims/5.png";
import aims6 from "./projects/aims/6.png";
import aims8 from "./projects/aims/8.png";
import aims9 from "./projects/aims/9.png";
import aims10 from "./projects/aims/10.png";
import aims11 from "./projects/aims/11.png";
import aims12 from "./projects/aims/12.png";
import aims13 from "./projects/aims/13.png";
import aims14 from "./projects/aims/14.png";
import aims15 from "./projects/aims/15.png";
import aims16 from "./projects/aims/16.png";
import aims17 from "./projects/aims/17.png";
import aims18 from "./projects/aims/18.png";
import aims19 from "./projects/aims/19.png";
import aims21 from "./projects/aims/21.png";
import aims22 from "./projects/aims/22.png";
import aims23 from "./projects/aims/23.png";
import aims24 from "./projects/aims/24.png";
import aims25 from "./projects/aims/25.png";
import aims26 from "./projects/aims/26.png";

// Other assets
import iphone from "./iphone-x.svg";
import monitor from "./monitor.svg";

interface IMedia {
	[project: string]: ReactImageGalleryItem[];
}

const Icons = {
	bootstrapIcon,
	djangoIcon,
	expressIcon,
	flutterIcon,
	githubIcon,
	bashIcon,
	menuIcon,
	mongodbIcon,
	nodejsIcon,
	postgresIcon,
	pythonIcon,
	rabbitmqIcon,
	reactIcon,
	tsIcon,
	jsIcon,
	linkedinIcon,
	closeIcon,
	chevronRight,
	mailIcon,
	eyeIcon,
	chevronLeft,
	jqueryIcon,
	awsIcon,
	gcpIcon,
	digitaloceanIcon,
	vuejsIcon,
	dartIcon,
	stripeIcon,
	herokuIcon,
};

const Backgrounds = {
	waveV1,
	waveV2,
	waveV3,
	waveV4,
};

const Logos = {
	deakinLogo,
	deakinLaunchpadLogo,
	websolLogo,
	aimsLogo,
};

const Thumbnails = {
	aimsThumb,
	servoThumb,
	phantomThumb,
	measureupThumb,
	iserviceThumb,
};

const Media: IMedia = {
	aims: [
		{
			original: aims1,
			description: "Dashboard Administrators and Internal Staff",
		},
		{ original: aims4, description: "Agent KPI and Target tracking" },
		{ original: aims3, description: "Agent KPI and Target tracking" },
		{ original: aims5, description: "Agent Management" },
		{ original: aims6, description: "Agent Management" },
		{
			original: aims8,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: aims9,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: aims11,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: aims10,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: aims12,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: aims13,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: aims14,
			description: "User administration and permission control",
		},
		{
			original: aims15,
			description: "User administration and permission control",
		},
		{
			original: aims16,
			description: "User administration and permission control",
		},
		{ original: aims17, description: "Report Generation and Data Processing" },
		{ original: aims18, description: "Report Generation and Data Processing" },
		{ original: aims19, description: "Report Generation and Data Processing" },
		{ original: aims21, description: "Report Generation and Data Processing" },
		{
			original: aims22,
			description: "Employee/Agent version of the application",
		},
		{
			original: aims23,
			description: "Employee/Agent version of the application",
		},
		{
			original: aims24,
			description: "Employee/Agent version of the application",
		},
		{
			original: aims25,
			description: "Employee/Agent version of the application",
		},
		{
			original: aims26,
			description: "Employee/Agent version of the application",
		},
	],
};

const OtherAssets = {
	iphone,
	monitor,
};

export { Icons, Backgrounds, Logos, Thumbnails, Media, MyLogo, OtherAssets };
