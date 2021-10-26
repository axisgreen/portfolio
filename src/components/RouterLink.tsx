import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
	to: string;
	linkText: string;
	transition?: boolean;
}

/**
 * Links that uses react-router-dom NavLink
 */
const RouterLink: React.FC<Props> = ({ to, linkText, transition }) => {
	return (
		<NavLink
			activeClassName="bg-gray-100 text-black"
			exact
			to={to}
			className={`font-medium hover:bg-white hover:text-black p-3 m-1 rounded-md ${
				transition ? "transition-all" : ""
			}`}
		>
			{linkText}
		</NavLink>
	);
};

export default RouterLink;
