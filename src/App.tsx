import "./App.css";
import HomeView from "./views/HomeView";
import { Route, Switch, useLocation } from "react-router-dom";
import PageBackground from "./components/common/PageBackground";
import { ViewportProvider } from "./contexts/ViewportContext";
import ProjectView from "./views/ProjectView";
import AboutView from "./views/AboutView";
import ExperienceView from "./views/ExperienceView";
import ProjectDetailView from "./views/ProjectDetailView";
import Navigation from "./components/layout/Navigation/Navigation";
import Footer from "./components/layout/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { Backgrounds } from "./assets/assets";

function App() {
	const location = useLocation();
	return (
		<ViewportProvider>
			<PageBackground imageUrl={Backgrounds.waveV1}>
				<div className="p-4 flex flex-col min-h-screen">
					<Navigation />
					<AnimatePresence exitBeforeEnter>
						<Switch location={location} key={location.key}>
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
					</AnimatePresence>
					<Footer />
				</div>
			</PageBackground>
		</ViewportProvider>
	);
}

export default App;
