import { Icons } from "../../../assets/assets";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="flex flex-row-reverse justify-between 3xl:inline 3xl:mx-auto text-white">
			{/* Socials Cluster */}
			<div className="flex 2xl:justify-center gap-1 2xl:my-1">
				<div className="icon-tile hover:bg-black rounded-md p-2 transition-all cursor-pointer">
					<a
						href="mailto:professional@email.com"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Icons.mailIcon} alt="Email (Haritha Dissanayake)" />
					</a>
				</div>
				<div className="icon-tile hover:bg-black rounded-md p-2 transition-all cursor-pointer">
					<a
						href="https://github.com/axisgreen"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Icons.githubIcon} alt="Github (@axisgreen)" />
					</a>
				</div>
				<div className="icon-tile text-black p-2 hover:bg-black rounded-md transition-all cursor-pointer">
					<a
						href="https://linkedin.com/in/haritha-dissanayake-a49661180"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={Icons.linkedinIcon}
							alt="LinkedIn (Haritha Dissanayake)"
						/>
					</a>
				</div>
			</div>
			{/* Attribution */}
			<div className="my-auto text-sm sm:text-base">
				&copy; Haritha Dissanayake 2021
			</div>
		</div>
	);
};

export default Footer;
