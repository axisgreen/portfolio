import Card from "../components/common/Card";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const ProjectView: React.FC = () => {
	return (
		<div className="flex flex-col min-h-screen min-w-full text-white p-4">
			<Navigation />
			<div className="flex flex-col flex-1 gap-8">
				<div className="flex justify-center">
					<div className="text-5xl font-semibold">Projects</div>
				</div>
				<div className="mx-auto mb-4 xl:mb-0">
					<div className="flex flex-wrap bg-gray-800 shadow-xl rounded-md py-14 md:px-16 md:mx-16 justify-center">
						<Card title="" description="" image="" link="/card" />
						<Card title="" description="" image="" link="/card" />
						<Card title="" description="" image="" link="/card" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProjectView;
