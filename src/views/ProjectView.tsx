import Card from "../components/common/Card";

const ProjectView: React.FC = () => {
	return (
		<div className="flex flex-col flex-1 gap-8 text-white">
			<div className="flex justify-center">
				<div className="text-4xl sm:text-5xl font-semibold">Projects</div>
			</div>
			<div className="mx-auto mb-4 xl:mb-0">
				<div className="flex flex-col flex-wrap bg-gray-800 shadow-xl rounded-md py-14 md:px-16 md:mx-16">
					<Card title="" description="" image="" link="/projects/detail" />
					<Card title="" description="" image="" link="/projects/detail" />
					<Card title="" description="" image="" link="/projects/detail" />
					<Card title="" description="" image="" link="/projects/detail" />
					<Card title="" description="" image="" link="/projects/detail" />
				</div>
			</div>
		</div>
	);
};

export default ProjectView;
