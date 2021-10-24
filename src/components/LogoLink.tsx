import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
	to: string;
	linkContent: string | JSX.Element;
	transition?: boolean;
}

const LogoLink: React.FC<Props> = ({ to, transition, children }) => {
	return (
		<NavLink
			exact
			to={to}
			className={` text-3xl font-medium hover:bg-gray-100 hover:text-black rounded-md ${
				transition ? "transition-all" : ""
			}`}
		>
			{children}
		</NavLink>
	);
};

export default LogoLink;
