import "./App.css";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import viewBackgroundv1 from "./assets/backgrounds/wave-haikei-v1.svg";
import viewBackgroundv2 from "./assets/backgrounds/wave-haikei-v2.svg";
import viewBackgroundv3 from "./assets/backgrounds/wave-haikei-v3.svg";
import viewBackgroundv4 from "./assets/backgrounds/wave-haikei-v4.svg";
import RandomPageBackground from "./components/common/RandomPageBackground";
import Footer from "./components/Footer";
function App() {
	return (
		<div>
			<RandomPageBackground
				imageList={[
					viewBackgroundv1,
					viewBackgroundv2,
					viewBackgroundv3,
					viewBackgroundv4,
				]}
			>
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
			</RandomPageBackground>
		</div>
	);
}

export default App;
