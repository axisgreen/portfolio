import { IExperience } from "../../../data/Experiences";

interface Props {
	relatedExperience: IExperience;
}

const RelatedExperience: React.FC<Props> = ({ relatedExperience }) => {
	return (
		<div className="flex justify-between items-center p-4 border rounded-md hover:bg-white hover:text-black transition-all">
			<div className="flex flex-col">
				<div className="font-semibold">{relatedExperience.jobTitle}</div>
				<div className="text-xs">{relatedExperience.companyName}</div>
			</div>
			<div>
				<img
					src={relatedExperience.companyLogo}
					alt="Company Logo"
					width="40px"
					height="40px"
					className="bg-white rounded-md p-1"
				/>
			</div>
		</div>
	);
};

export default RelatedExperience;
