interface Props {
	jobTitle: string;
	companyName: string;
	companyLogo: string;
	jobStartDate: string;
	jobEndDate: string;
	details: JSX.Element;
}

const JobAccordion: React.FC<Props> = ({
	jobTitle,
	companyName,
	companyLogo,
	jobStartDate,
	jobEndDate,
	details,
}) => {
	return (
		<div className="py-4 cursor-pointer">
			<div className="flex flex-wrap mx-auto hover:bg-white hover:text-black text-white shadow-sm hover:shadow-xl rounded-md transition-all p-4 my-2">
				<div className="flex items-center">
					<img
						src={companyLogo}
						alt="Company Logo"
						width="75px"
						height="75px"
						className="bg-white rounded-md p-2"
					/>
					<div className="flex flex-col m-2 p-2">
						<div className="text-sm font-semibold">
							{jobStartDate} – {jobEndDate}
						</div>
						<div className="text-2xl font-bold">{jobTitle}</div>
						<div className="font-medium ">{companyName}</div>
						<div className="hidden">{details}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobAccordion;
