import pageBackgroundV1 from "../assets/backgrounds/wave-haikei-v1.svg";
import pageBackgroundV2 from "../assets/backgrounds/wave-haikei-v2.svg";
import pageBackgroundV3 from "../assets/backgrounds/wave-haikei-v3.svg";
import pageBackgroundV4 from "../assets/backgrounds/wave-haikei-v4.svg";

const getRandomBackground = () => {
	const backgroundImageList = [
		pageBackgroundV1,
		pageBackgroundV2,
		pageBackgroundV3,
		pageBackgroundV4,
	];
	return backgroundImageList[
		Math.floor(Math.random() * backgroundImageList.length)
	];
};

export default getRandomBackground;
