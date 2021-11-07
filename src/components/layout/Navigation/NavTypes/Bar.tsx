import PrimaryButton from "../../../common/PrimaryButton";
import RouterLink from "../../../RouterLink";

const Bar: React.FC = () => {
	return (
		<div className="flex justify-end md:gap-5 items-center">
			<div className="m-2 md:mx-0">
				<RouterLink transition to="/projects" linkText="Projects" />
				<RouterLink transition to="/experience" linkText="Experience" />
			</div>
		</div>
	);
};

export default Bar;
