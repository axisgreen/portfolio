import "./App.css";
import MainView from "./views/HomeView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="flex flex-col p-5 h-screen w-screen">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<MainView />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
