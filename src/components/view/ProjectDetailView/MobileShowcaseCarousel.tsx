import { motion } from "framer-motion";
import React from "react";
import { OtherAssets } from "../../../assets/assets";

const MobileShowcaseCarousel: React.FC = () => {
	return (
		<motion.div
			initial={{ translateY: 40, opacity: 0 }}
			animate={{
				translateY: 0,
				opacity: 1,
				animationFillMode: "both",
			}}
			transition={{ duration: 0.4 }}
			className="flex justify-center items-center mb-8 sm:mb-0"
		>
			<div>
				<img
					src={OtherAssets.iphone}
					alt="Mobile View"
					style={{
						minHeight: "40rem",
						maxHeight: "75vh",
						minWidth: "fit-content",
					}}
				/>
			</div>
		</motion.div>
	);
};

export default MobileShowcaseCarousel;
