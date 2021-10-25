import "./App.css";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import PageBackground from "./components/common/PageBackground";
import getRandomBackground from "./helpers/getRandomBackground";
import { ViewportProvider } from "./contexts/ViewportContext";
import ProjectView from "./views/ProjectView";
function App() {
	return (
		<ViewportProvider>
			<PageBackground imageUrl={getRandomBackground()}>
				<BrowserRouter>
					<div className="flex flex-col h-screen text-white px-4 py-4">
						<Navigation />
						<Switch>
							<Route exact path="/">
								<HomeView />
							</Route>
							<Route exact path="/projects">
								<ProjectView />
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
