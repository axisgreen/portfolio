import { useHistory } from "react-router";
import { Icons } from "../../assets/assets";
import "./BackButton.css";

const BackButton: React.FC = () => {
	const history = useHistory();
	return (
		<button
			className="rounded-md p-2 hover:shadow-lg border hover:bg-white hover:text-black transition-all chevron-parent text-xs"
			onClick={() => history.goBack()}
		>
			<div className="flex gap-2">
				<div className="flex items-center">
					<img
						src={Icons.chevronLeft}
						alt="Back"
						width="7px"
						height="7px"
						className="chevron-left"
						style={{ paddingTop: "1px", paddingBottom: "1px" }}
					/>
				</div>
				<div className="items-center justify-center">Back</div>
			</div>
		</button>
	);
};

export default BackButton;
