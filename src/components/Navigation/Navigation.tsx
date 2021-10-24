import React, { useContext, useEffect, useState } from "react";
import LogoLink from "../LogoLink";
import { Logo } from "../../assets/assets";
import "./Navigation.css";
import {
	ViewportBreakpoints,
	ViewportContext,
} from "../../contexts/ViewportContext";
import Drawer from "./NavTypes/Drawer";
import Bar from "./NavTypes/Bar";

type NavType = "drawer" | "bar";

const Navigation: React.FC = () => {
	const [navbarType, setNavbarType] = useState<NavType>("bar");
	const { width } = useContext(ViewportContext);
	useEffect(() => {
		if (width <= ViewportBreakpoints.mobile) {
			setNavbarType("drawer");
		} else {
			setNavbarType("bar");
		}
	}, [width]);
	return (
		<div className="flex justify-between 3xl:justify-evenly">
			<div className="hover:bg-gray-100 p-2 rounded-md transition-all">
				<LogoLink to="/" linkContent="" transition>
					<Logo width="50px" height="50px" />
				</LogoLink>
			</div>
			{navbarType === "bar" ? <Bar /> : <Drawer />}
		</div>
	);
};

export default Navigation;
