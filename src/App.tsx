import "./App.css";
import PageBackground from "./components/common/PageBackground";
import { ViewportProvider } from "./contexts/ViewportContext";
import Navigation from "./components/layout/Navigation/Navigation";
import Footer from "./components/layout/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { Backgrounds } from "./assets/assets";
import Routes from "./routes/Routes";

function App() {
	const location = useLocation();
	return (
		<ViewportProvider>
			<PageBackground imageUrl={Backgrounds.waveV1}>
				<div className="p-4 flex flex-col min-h-screen">
					<Navigation />
					<AnimatePresence exitBeforeEnter>
						<Routes />
					</AnimatePresence>
					<Footer />
				</div>
			</PageBackground>
		</ViewportProvider>
	);
}

export default App;
