import { motion } from "framer-motion";
import React from "react";
import { ITechnology } from "../../../data/Projects";
import TechBadge from "../../common/TechBadge";

interface Props {
	technologiesUsed: ITechnology[];
}

const TechUsedGroup: React.FC<Props> = ({ technologiesUsed }) => {
	return (
		<div className="flex gap-1">
			{technologiesUsed.map((technology, i) => {
				return (
					<motion.div
						key={i}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.15 * i }}
					>
						<TechBadge
							key={i}
							icon={technology.icon}
							tooltip={technology.tooltip}
						/>
					</motion.div>
				);
			})}
		</div>
	);
};

export default TechUsedGroup;
