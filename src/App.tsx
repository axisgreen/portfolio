import "./App.css";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import PageBackground from "./components/common/PageBackground";
import getRandomBackground from "./helpers/getRandomBackground";
import { ViewportProvider } from "./contexts/ViewportContext";
function App() {
	return (
		<div>
			<ViewportProvider>
				<PageBackground imageUrl={getRandomBackground()}>
					<BrowserRouter>
						<div className="flex flex-col h-screen w-full text-white items-stretch px-4 py-4">
							<Navigation />
							<Switch>
								<Route exact path="/">
									<HomeView />
								</Route>
							</Switch>
							<Footer />
						</div>
					</BrowserRouter>
				</PageBackground>
			</ViewportProvider>
		</div>
	);
}

export default App;
