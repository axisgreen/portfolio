import React from "react";

interface Props {
	to: string;
	linkText: string;
	transition?: boolean;
}

/**
 * Links to HTML elements based on ids
 */
const Link: React.FC<Props> = ({ to, transition, linkText }) => {
	return (
		<a
			href={`#${to}`}
			className={`font-medium hover:bg-gray-100 p-3 m-1 rounded-md ${
				transition ? "transition-all" : ""
			}`}
		>
			{linkText}
		</a>
	);
};

export default Link;
