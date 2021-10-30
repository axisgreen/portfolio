import Projects from "../data/Projects";

/**
 * Get a project from the Projects list or return null
 */
const getProjectFromId = (id: string) => {
	const projectFound = Projects.find((project) => project.id === id);
	if (!projectFound) return null;
	return projectFound;
};

export default getProjectFromId;
