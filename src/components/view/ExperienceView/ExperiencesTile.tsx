import { motion } from "framer-motion";
import Experiences from "../../../data/Experiences";
import JobExpandable from "../../common/JobExpandable";
import Spacer from "../../common/Spacer";

const ExperiencesTile: React.FC = ({}) => {
	return (
		<motion.div
			initial={{ translateY: 40, opacity: 0 }}
			animate={{
				translateY: 0,
				opacity: 1,
			}}
			transition={{ delay: 0.2 }}
			className="flex flex-wrap bg-gray-800 shadow-xl rounded-md py-10 md:px-16 md:mx-16 justify-center"
		>
			<div>
				{Experiences.map((experience, i) => {
					return (
						<>
							<JobExpandable
								key={i}
								jobTitle={experience.jobTitle}
								companyName={experience.companyName}
								companyLogo={experience.companyLogo}
								jobStartDate={experience.jobStartDate}
								jobEndDate={experience.jobEndDate}
								mountExpanded={experience.mountExpanded}
								details={experience.details}
							/>
							{/* Don't put the spacer after the last item */}
							{Experiences.length - 1 > i && <Spacer />}
						</>
					);
				})}
			</div>
		</motion.div>
	);
};

export default ExperiencesTile;
