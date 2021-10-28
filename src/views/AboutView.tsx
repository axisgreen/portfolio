import Footer from "../components/layout/Footer/Footer";
import Navigation from "../components/layout/Navigation/Navigation";

const AboutView: React.FC = () => {
	return (
		<div className="flex flex-col min-h-screen text-white px-4 py-4">
			<Navigation />
			<div className="flex flex-1"></div>
			<Footer />
		</div>
	);
};

export default AboutView;
