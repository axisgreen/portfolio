import "./App.css";
import PageBackground from "./components/common/PageBackground";
import { ViewportProvider } from "./contexts/ViewportContext";
import Navigation from "./components/layout/Navigation/Navigation";
import Footer from "./components/layout/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { Backgrounds } from "./assets/assets";
import Routes from "./routes/Routes";
import AppContainer from "./components/common/AppContainer";

function App() {
	return (
		<ViewportProvider>
			<PageBackground imageUrl={Backgrounds.waveV1}>
				<AppContainer>
					<Navigation />
					<AnimatePresence exitBeforeEnter>
						<Routes />
					</AnimatePresence>
					<Footer />
				</AppContainer>
			</PageBackground>
		</ViewportProvider>
	);
}

export default App;
