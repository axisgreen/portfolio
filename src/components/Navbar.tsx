import PrimaryButton from "./common/Button";
import React from "react";
import RouterLink from "./RouterLink";
import LogoLink from "./LogoLink";

const Navbar: React.FC = () => {
	return (
		<div className="flex justify-between">
			<div className="m-2 md:m-0">
				<LogoLink to="/" linkContent="HD" />
			</div>
			<div className="flex justify-end md:gap-5 items-center">
				<div className="m-2 md:m-0">
					<RouterLink transition to="/about" linkText="About" />
					<RouterLink transition to="/projects" linkText="Projects" />
					<RouterLink transition to="/experience" linkText="Experience" />
				</div>
				<PrimaryButton buttonText="Get In Touch" />
			</div>
		</div>
	);
};

export default Navbar;
