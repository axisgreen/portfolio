import Card from "../components/common/Card";
import Footer from "../components/layout/Footer/Footer";
import Navigation from "../components//layout/Navigation/Navigation";

const ProjectView: React.FC = () => {
	return (
		<div className="flex flex-col min-h-screen min-w-full text-white p-4">
			<Navigation />
			<div className="flex flex-col flex-1 gap-8">
				<div className="flex justify-center">
					<div className="text-4xl sm:text-5xl font-semibold">Projects</div>
				</div>
				<div className="mx-auto mb-4 xl:mb-0">
					<div className="flex flex-col flex-wrap bg-gray-800 shadow-xl rounded-md py-14 md:px-16 md:mx-16">
						<Card title="" description="" image="" link="/project/detail" />
						<Card title="" description="" image="" link="/project/detail" />
						<Card title="" description="" image="" link="/project/detail" />
						<Card title="" description="" image="" link="/project/detail" />
						<Card title="" description="" image="" link="/project/detail" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProjectView;
