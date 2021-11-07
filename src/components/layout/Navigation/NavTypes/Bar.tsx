import { useHistory } from "react-router";
import PrimaryButton from "../../../common/PrimaryButton";
import RouterLink from "../../../RouterLink";

const Bar: React.FC = () => {
	const history = useHistory();
	return (
		<div className="flex justify-end items-center">
			<div className="m-2 md:mx-0">
				<RouterLink transition to="/projects" linkText="Projects" />
				<RouterLink transition to="/experience" linkText="Experience" />
			</div>
			<span className="m-1">
				<PrimaryButton
					buttonText="Contact"
					onClick={() => history.push("/contact")}
				/>
			</span>
		</div>
	);
};

export default Bar;
