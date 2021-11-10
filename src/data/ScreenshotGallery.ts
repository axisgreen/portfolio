import { ReactImageGalleryItem } from "react-image-gallery";
import { Screenshots } from "../assets/assets";

interface Gallery {
	[project: string]: ReactImageGalleryItem[];
}

const ScreenshotGallery: Gallery = {
	aims: [
		{
			original: Screenshots.aims.aimsDashboardStaff,
			description: "Dashboard for Administrators and Internal Staff",
		},
		{
			original: Screenshots.aims.aimsActivations,
			description: "KPI and target tracking for employed agents",
		},
		{
			original: Screenshots.aims.aimsAddActivation,
			description: "KPI and target tracking for employed agents",
		},
		{ original: Screenshots.aims.aimsAgents, description: "Agent Management" },
		{
			original: Screenshots.aims.aimsAddAgent,
			description: "Agent Management",
		},
		{
			original: Screenshots.aims.aimsAgentSalaries,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: Screenshots.aims.aimsAddAgentSalary,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: Screenshots.aims.aimsAddSalaryAddition,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: Screenshots.aims.aimsSalaryAddition,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: Screenshots.aims.aimsSalaryDeductions,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: Screenshots.aims.aimsSalarySummary,
			description: "Agent Salary/Payroll Creation and Management",
		},
		{
			original: Screenshots.aims.aimsUsers,
			description: "User administration and permission control",
		},
		{
			original: Screenshots.aims.aimsEditUser,
			description: "User administration and permission control",
		},
		{
			original: Screenshots.aims.aimsUserPermissions,
			description: "User administration and permission control",
		},
		{
			original: Screenshots.aims.aimsReportPayroll,
			description: "Report Generation and Data Processing",
		},
		{
			original: Screenshots.aims.aimsReportPayrollExample,
			description: "Report Generation and Data Processing",
		},
		{
			original: Screenshots.aims.aimsReportAgent,
			description: "Report Generation and Data Processing",
		},
		{
			original: Screenshots.aims.aimsReportAgentExample,
			description: "Report Generation and Data Processing",
		},
		{
			original: Screenshots.aims.aimsDashboardEmployee,
			description: "Employee/Agent version of the application",
		},
		{
			original: Screenshots.aims.aimsReportActivationEmployee,
			description: "Employee/Agent version of the application",
		},
		{
			original: Screenshots.aims.aimsReportSalaryEmployee,
			description: "Employee/Agent version of the application",
		},
		{
			original: Screenshots.aims.aimsSalaryEmployeeExample,
			description: "Employee/Agent version of the application",
		},
		{
			original: Screenshots.aims.aimsEmployeeAccEdit,
			description: "Employee/Agent version of the application",
		},
	],
	phantom: [
		{
			original: Screenshots.phantom.phantomDashboard,
			description: "Dashboard",
		},
		{
			original: Screenshots.phantom.phantomManageNews,
			description: "Manage News Items (Approve/Reject/Edit)",
		},
		{
			original: Screenshots.phantom.phantomAddNews,
			description: "Add a News Item to send",
		},
		{
			original: Screenshots.phantom.phantomAccounts,
			description: "Accounts Overview",
		},
		{
			original: Screenshots.phantom.phantomManageAccount,
			description: "Manage an account",
		},
		{
			original: Screenshots.phantom.phantomAddApp,
			description: "Add an application to the account",
		},
		{
			original: Screenshots.phantom.phantomAccMsgHistory,
			description: "Account Messaging History",
		},
		{
			original: Screenshots.phantom.phantomEventLog,
			description: "Event Logs",
		},
		{
			original: Screenshots.phantom.phantomSettings,
			description: "Settings",
		},
	],
	servo: [
		{
			original: Screenshots.servo.servoDashboard,
			description: "Dashboard",
		},
		{
			original: Screenshots.servo.servoCreateNew,
			description: "Create New Customer/Vehicle/Service Record",
		},
		{
			original: Screenshots.servo.servoCustomers,
			description: "Customer Information Management",
		},
		{
			original: Screenshots.servo.servoNewCustomer,
			description: "Customer Information Management",
		},
		{
			original: Screenshots.servo.servoCustomerDetail,
			description: "Customer Information Management",
		},
		{
			original: Screenshots.servo.servoVehicles,
			description: "Vehicle Management",
		},
		{
			original: Screenshots.servo.servoNewVehicle,
			description: "Vehicle Management",
		},
		{
			original: Screenshots.servo.servoVehicleDetail,
			description: "Vehicle Management",
		},
		{
			original: Screenshots.servo.servoServices,
			description: "Service Record Management",
		},
		{
			original: Screenshots.servo.servoNewService,
			description: "Service Record Management",
		},
		{
			original: Screenshots.servo.servoServiceDetail,
			description: "Service Record Management",
		},
		{
			original: Screenshots.servo.servoUsers,
			description: "User Management and Permission Control",
		},
		{
			original: Screenshots.servo.servoEditUser,
			description: "User Management and Permission Control",
		},
		{
			original: Screenshots.servo.servoUserLogs,
			description: "User Management and Permission Control",
		},
		{
			original: Screenshots.servo.servoExport,
			description: "Report Generation and Export",
		},
		{
			original: Screenshots.servo.servoExportExample,
			description: "Report Generation and Export",
		},
	],
	measureup: [
		{ original: Screenshots.measureup.measureupScreen1 },
		{ original: Screenshots.measureup.measureupScreen2 },
		{ original: Screenshots.measureup.measureupScreen3 },
		{ original: Screenshots.measureup.measureupScreen4 },
		{ original: Screenshots.measureup.measureupScreen5 },
	],
	iservice: [
		{ original: Screenshots.iservice.iserviceHome },
		{ original: Screenshots.iservice.iserviceRegister },
		{ original: Screenshots.iservice.iserviceResetPassword },
		{ original: Screenshots.iservice.iserviceProfile },
		{ original: Screenshots.iservice.iserviceNewTask },
		{ original: Screenshots.iservice.iserviceChat },
		{ original: Screenshots.iservice.iserviceTaskDetail },
		{ original: Screenshots.iservice.iservicePayments },
	],
};

export default ScreenshotGallery;
