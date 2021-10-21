import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
	to: string;
	linkContent: string | JSX.Element;
	transition?: boolean;
}

const LogoLink: React.FC<Props> = ({ to, linkContent, transition }) => {
	return (
		<NavLink
			exact
			to={to}
			className={` text-3xl font-medium p-2 hover:bg-gray-100 rounded-md ${
				transition ? "transition-all" : ""
			}`}
		>
			{linkContent}
		</NavLink>
	);
};

export default LogoLink;
