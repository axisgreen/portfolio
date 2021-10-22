import githubIcon from "../assets/icons/github-brands.svg";
import linkedInIcon from "../assets/icons/linkedin-brands.svg";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="flex flex-row-reverse justify-between 3xl:inline 3xl:mx-auto">
			{/* Socials Cluster */}
			<div className="flex 2xl:justify-center gap-1 2xl:my-1">
				<div className="icon-tile hover:bg-gray-100 rounded-md p-2">
					<a href="">
						<img src={githubIcon} alt="Github (@axisgreen)" />
					</a>
				</div>
				<div className="icon-tile text-black p-2 hover:bg-white rounded-md">
					<a href="">
						<img src={linkedInIcon} alt="LinkedIn (Haritha Dissanayake)" />
					</a>
				</div>
			</div>
			{/* Attribution */}
			<div className="my-auto">&copy; Haritha Dissanayake 2021</div>
		</div>
	);
};

export default Footer;
