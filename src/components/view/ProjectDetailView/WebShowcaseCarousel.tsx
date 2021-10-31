import { motion } from "framer-motion";
import React from "react";
import { OtherAssets } from "../../../assets/assets";

const WebShowcaseCarousel: React.FC = () => {
	return (
		<motion.div
			initial={{ translateY: 40, opacity: 0 }}
			animate={{
				translateY: 0,
				opacity: 1,
				animationFillMode: "both",
			}}
			transition={{ duration: 0.4 }}
			className="flex justify-center items-center"
		>
			<div>
				<img
					src={OtherAssets.monitor}
					alt="Web View"
					style={{
						minHeight: "30rem",
						maxHeight: "50vh",
					}}
				/>
			</div>
		</motion.div>
	);
};

export default WebShowcaseCarousel;
