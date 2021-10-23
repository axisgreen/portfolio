import PrimaryButton from "./common/PrimaryButton";
import React from "react";
import RouterLink from "./RouterLink";
import LogoLink from "./LogoLink";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between 3xl:justify-evenly">
      <div className="m-2 md:mx-0">
        <LogoLink to="/" linkContent="HD" transition />
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
