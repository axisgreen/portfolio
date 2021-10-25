import Card from "../components/common/Card";

const ProjectView: React.FC = () => {
	return (
		<div className="flex flex-col flex-1 gap-10">
			<div className="flex justify-center">
				<div className="text-5xl font-semibold">Projects</div>
			</div>
			<div className="flex flex-wrap bg-white shadow-xl rounded-md py-14 mb-4 px-16 mx-16">
				<Card title="" description="" link="/card" />
				<Card title="" description="" link="/card" />
				<Card title="" description="" link="/card" />
				<Card title="" description="" link="/card" />
			</div>
		</div>
	);
};

export default ProjectView;
