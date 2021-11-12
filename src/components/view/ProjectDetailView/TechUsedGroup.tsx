import React from "react";
import { ITechnology } from "../../../data/Projects";
import TechBadge from "../../common/TechBadge";
import StaggeredFadeIn from "../../framer/StaggeredFadeIn";

interface Props {
	technologiesUsed: ITechnology[];
}

const TechUsedGroup: React.FC<Props> = ({ technologiesUsed }) => {
	return (
		<div className="flex gap-1">
			{technologiesUsed.map((technology, i) => {
				return (
					<StaggeredFadeIn i={i} transitionDelay={0.1}>
						<TechBadge
							key={i}
							icon={technology.icon}
							tooltip={technology.tooltip}
						/>
					</StaggeredFadeIn>
				);
			})}
		</div>
	);
};

export default TechUsedGroup;
