import React from "react";
import { OtherAssets } from "../../../assets/assets";

const MobileShowcaseCarousel: React.FC = () => {
	return (
		<div className="flex justify-center items-center mb-8 sm:mb-0">
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
	);
};

export default MobileShowcaseCarousel;
