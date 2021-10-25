import Card from "../components/common/Card";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const ProjectView: React.FC = () => {
	return (
		<div className="flex flex-col min-h-screen max-h-screen text-white px-4 py-4">
			<Navigation />
			<div className="flex flex-col flex-1 gap-8">
				<div className="flex justify-center">
					<div className="text-5xl font-semibold">Projects</div>
				</div>
				<div className="flex flex-wrap bg-white shadow-xl rounded-md py-14 px-16 mx-16">
					<Card title="" description="" link="/card" />
					<Card title="" description="" link="/card" />
					<Card title="" description="" link="/card" />
					<Card title="" description="" link="/card" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProjectView;
