import React from "react";

interface Props {
	imageUrl: string;
}

const PageBackground: React.FC<Props> = ({ imageUrl, children }) => {
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

export default PageBackground;
