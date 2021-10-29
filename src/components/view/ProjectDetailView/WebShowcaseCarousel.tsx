import React from "react";
import { OtherAssets } from "../../../assets/assets";

const WebShowcaseCarousel: React.FC = () => {
	return (
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
	);
};

export default WebShowcaseCarousel;
