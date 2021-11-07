import { Route, Switch, useLocation } from "react-router";
import ExperienceView from "../views/ExperienceView";
import HomeView from "../views/HomeView";
import ProjectDetailView from "../views/ProjectDetailView";
import ProjectView from "../views/ProjectView";

const Routes: React.FC = () => {
	const location = useLocation();
	return (
		<Switch location={location} key={location.key}>
			<Route exact path="/">
				<HomeView />
			</Route>
			<Route exact path="/projects">
				<ProjectView />
			</Route>
			<Route exact path="/projects/:projectId">
				<ProjectDetailView />
			</Route>
			<Route exact path="/experience">
				<ExperienceView />
			</Route>
		</Switch>
	);
};

export default Routes;
