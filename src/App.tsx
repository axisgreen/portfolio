import "./App.css";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageBackground from "./components/common/PageBackground";
import getRandomBackground from "./helpers/getRandomBackground";
import { ViewportProvider } from "./contexts/ViewportContext";
import ProjectView from "./views/ProjectView";
import AboutView from "./views/AboutView";
import ExperienceView from "./views/ExperienceView";

function App() {
	return (
		<ViewportProvider>
			<PageBackground imageUrl={getRandomBackground()}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							<HomeView />
						</Route>
						<Route exact path="/about">
							<AboutView />
						</Route>
						<Route exact path="/projects">
							<ProjectView />
						</Route>
						<Route exact path="/experience">
							<ExperienceView />
						</Route>
					</Switch>
				</BrowserRouter>
			</PageBackground>
		</ViewportProvider>
	);
}

export default App;
