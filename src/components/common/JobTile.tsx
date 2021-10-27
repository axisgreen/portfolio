import { useState } from "react";
import { Icons } from "../../assets/assets";
import AnimatedOverflow from "../transitions/AnimatedOverflow";
import Rotate90 from "../animations/Rotate90";
import "./JobTile.css";

interface Props {
	jobTitle: string;
	companyName: string;
	companyLogo: string;
	jobStartDate: string;
	jobEndDate: string;
	details: JSX.Element;
	mountExpanded?: boolean;
}

const JobTile: React.FC<Props> = ({
	jobTitle,
	companyName,
	companyLogo,
	jobStartDate,
	jobEndDate,
	details,
	mountExpanded = false,
}) => {
	const [showDetails, setShowDetails] = useState(mountExpanded);
	return (
		<div className="py-4">
			<div
				className="flex flex-wrap rounded-md transition-all p-4 my-2 max-w-2xl filter-invert hover:bg-white hover:text-black hover:shadow-xl cursor-pointer parent"
				onClick={() => setShowDetails(!showDetails)}
			>
				<div className="flex flex-col sm:flex-row items-center gap-4 w-full">
					<div>
						<img
							src={companyLogo}
							alt="Company Logo"
							width="75px"
							height="75px"
							className="bg-white rounded-md p-2"
						/>
					</div>
					<div className="flex flex-1">
						<div className="flex flex-col m-2 p-2">
							<div className="text-xs md:text-sm font-semibold">
								{jobStartDate} – {jobEndDate}
							</div>
							<div className="text-xl md:text-2xl font-bold">{jobTitle}</div>
							<div className="font-medium text-sm md:text-base ">
								{companyName}
							</div>
						</div>
					</div>
					<div>
						<Rotate90 trigger={showDetails} timeout={100}>
							<img
								src={Icons.chevronRight}
								alt="Click for more"
								width="30px"
								height="30px"
								className={"chevron-right"}
							/>
						</Rotate90>
					</div>
				</div>

				<AnimatedOverflow trigger={showDetails} timeout={300}>
					<div className="px-4">{details}</div>
				</AnimatedOverflow>
			</div>
		</div>
	);
};

export default JobTile;
