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
import aimsDashboardStaff from "./projects/aims/aims-dashboard-staff.png";
import aimsAddActivation from "./projects/aims/aims-add-activation.png";
import aimsActivations from "./projects/aims/aims-activations.png";
import aimsAgents from "./projects/aims/aims-agents.png";
import aimsAddAgent from "./projects/aims/aims-add-agent.png";
import aimsAgentSalaries from "./projects/aims/aims-agent-salaries.png";
import aimsAddAgentSalary from "./projects/aims/aims-add-agent-salary.png";
import aimsSalaryAddition from "./projects/aims/aims-salary-additions.png";
import aimsAddSalaryAddition from "./projects/aims/aims-add-salary-addition.png";
import aimsSalaryDeductions from "./projects/aims/aims-salary-deductions.png";
import aimsSalarySummary from "./projects/aims/aims-salary-summary.png";
import aimsUsers from "./projects/aims/aims-users.png";
import aimsEditUser from "./projects/aims/aims-edit-user.png";
import aimsUserPermissions from "./projects/aims/aims-user-permissions.png";
import aimsReportPayroll from "./projects/aims/aims-report-payroll.png";
import aimsReportPayrollExample from "./projects/aims/aims-report-payroll-example.png";
import aimsReportAgent from "./projects/aims/aims-report-agent.png";
import aimsReportAgentExample from "./projects/aims/aims-report-agent-example.png";
import aimsDashboardEmployee from "./projects/aims/aims-dashboard-employee.png";
import aimsReportActivationEmployee from "./projects/aims/aims-report-activation-employee.png";
import aimsReportSalaryEmployee from "./projects/aims/aims-report-salary-employee.png";
import aimsSalaryEmployeeExample from "./projects/aims/aims-salary-employee-example.png";
import aimsEmployeeAccEdit from "./projects/aims/aims-employee-acc-edit.png";

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
      original: aimsDashboardStaff,
      description: "Dashboard for Administrators and Internal Staff",
    },
    {
      original: aimsActivations,
      description: "KPI and target tracking for employed agents",
    },
    {
      original: aimsAddActivation,
      description: "KPI and target tracking for employed agents",
    },
    { original: aimsAgents, description: "Agent Management" },
    { original: aimsAddAgent, description: "Agent Management" },
    {
      original: aimsAgentSalaries,
      description: "Agent Salary/Payroll Creation and Management",
    },
    {
      original: aimsAddAgentSalary,
      description: "Agent Salary/Payroll Creation and Management",
    },
    {
      original: aimsAddSalaryAddition,
      description: "Agent Salary/Payroll Creation and Management",
    },
    {
      original: aimsSalaryAddition,
      description: "Agent Salary/Payroll Creation and Management",
    },
    {
      original: aimsSalaryDeductions,
      description: "Agent Salary/Payroll Creation and Management",
    },
    {
      original: aimsSalarySummary,
      description: "Agent Salary/Payroll Creation and Management",
    },
    {
      original: aimsUsers,
      description: "User administration and permission control",
    },
    {
      original: aimsEditUser,
      description: "User administration and permission control",
    },
    {
      original: aimsUserPermissions,
      description: "User administration and permission control",
    },
    {
      original: aimsReportPayroll,
      description: "Report Generation and Data Processing",
    },
    {
      original: aimsReportPayrollExample,
      description: "Report Generation and Data Processing",
    },
    {
      original: aimsReportAgent,
      description: "Report Generation and Data Processing",
    },
    {
      original: aimsReportAgentExample,
      description: "Report Generation and Data Processing",
    },
    {
      original: aimsDashboardEmployee,
      description: "Employee/Agent version of the application",
    },
    {
      original: aimsReportActivationEmployee,
      description: "Employee/Agent version of the application",
    },
    {
      original: aimsReportSalaryEmployee,
      description: "Employee/Agent version of the application",
    },
    {
      original: aimsSalaryEmployeeExample,
      description: "Employee/Agent version of the application",
    },
    {
      original: aimsEmployeeAccEdit,
      description: "Employee/Agent version of the application",
    },
  ],
};

const OtherAssets = {
  iphone,
  monitor,
};

export { Icons, Backgrounds, Logos, Thumbnails, Media, MyLogo, OtherAssets };
