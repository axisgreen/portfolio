import "./App.css";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageBackground from "./components/common/PageBackground";
import getRandomBackground from "./helpers/getRandomBackground";
import { ViewportProvider } from "./contexts/ViewportContext";
import ProjectView from "./views/ProjectView";
import AboutView from "./views/AboutView";
import ExperienceView from "./views/ExperienceView";
import ProjectDetailView from "./views/ProjectDetailView";
import Navigation from "./components/layout/Navigation/Navigation";
import Footer from "./components/layout/Footer/Footer";

function App() {
	return (
		<ViewportProvider>
			<PageBackground imageUrl={getRandomBackground()}>
				<BrowserRouter>
					<div className="p-4 flex flex-col min-h-screen">
						<Navigation />
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
							<Route exact path="/projects/:projectId">
								<ProjectDetailView />
							</Route>
							<Route exact path="/experience">
								<ExperienceView />
							</Route>
						</Switch>
						<Footer />
					</div>
				</BrowserRouter>
			</PageBackground>
		</ViewportProvider>
	);
}

export default App;
