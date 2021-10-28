import ReactTooltip from "react-tooltip";

interface Props {
	icon: string;
	tooltip: string;
}

const TechBadge: React.FC<Props> = ({ icon, tooltip }) => {
	return (
		<div>
			<div
				data-tip={tooltip}
				className="bg-black opacity-75 bg-opacity-50 hover:bg-opacity-75 hover:opacity-100 transition-all rounded-md p-2"
			>
				<img src={icon} alt={tooltip} width="20px" height="20px" />
			</div>
			{/* Tooltip */}
			<ReactTooltip place="bottom" effect="solid" backgroundColor="black" />
		</div>
	);
};

export default TechBadge;
