import "./App.css";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageBackground from "./components/common/PageBackground";
import getRandomBackground from "./helpers/getRandomBackground";
function App() {
	return (
		<div>
			<PageBackground imageUrl={getRandomBackground()}>
				<BrowserRouter>
					<div className="flex flex-col h-screen w-full text-white items-stretch px-4 py-4">
						<Navbar />
						<Switch>
							<Route exact path="/">
								<HomeView />
							</Route>
						</Switch>
						<Footer />
					</div>
				</BrowserRouter>
			</PageBackground>
		</div>
	);
}

export default App;
