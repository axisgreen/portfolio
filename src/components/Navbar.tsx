import PrimaryButton from "./common/PrimaryButton";
import React from "react";
import RouterLink from "./RouterLink";
import LogoLink from "./LogoLink";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar: React.FC = () => {
	return (
		<div className="flex justify-between 3xl:justify-evenly">
			<div className="m-2 md:mx-0">
				<div className="hover:bg-gray-100 px-2 rounded-md shadow-md transition-all">
					<LogoLink to="/" linkContent="" transition>
						<Logo width="50px" height="50px" />
					</LogoLink>
				</div>
			</div>
			<div className="flex justify-end md:gap-5 items-center">
				<div className="m-2 md:mx-0">
					<RouterLink transition to="/about" linkText="About" />
					<RouterLink transition to="/projects" linkText="Projects" />
					<RouterLink transition to="/experience" linkText="Experience" />
					<span className="m-1">
						<PrimaryButton buttonText="Contact" />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
