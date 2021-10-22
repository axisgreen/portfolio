import React from "react";

interface Props {
	imageList: string[];
}

const RandomPageBackground: React.FC<Props> = ({ imageList, children }) => {
	const imageUrl = imageList[Math.floor(Math.random() * imageList.length)];
	return (
		<div
			style={{
				backgroundImage: `url('${imageUrl}')`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{children}
		</div>
	);
};

export default RandomPageBackground;
