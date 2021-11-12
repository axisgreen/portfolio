import Experiences from "../../../data/Experiences";
import JobExpandable from "../../common/JobExpandable";
import Spacer from "../../common/Spacer";
import FadeUp from "../../framer/FadeUp";
import StaggeredFadeIn from "../../framer/StaggeredFadeIn";

const ExperiencesTile: React.FC = () => {
	return (
		<FadeUp className="flex flex-wrap bg-gray-800 shadow-xl rounded-md px-4 py-10 md:px-16 md:mx-16 justify-center">
			<div>
				{Experiences.map((experience, i) => {
					return (
						<StaggeredFadeIn i={i} transitionDelay={0.15}>
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
						</StaggeredFadeIn>
					);
				})}
			</div>
		</FadeUp>
	);
};

export default ExperiencesTile;
