import { Icons } from "../../../assets/assets";
import SocialIconGroup from "./SocialIconGroup";
const Footer = () => {
	return (
		<div className="flex flex-row-reverse justify-between 3xl:inline 3xl:mx-auto text-white">
			{/* Socials Cluster */}
			<SocialIconGroup
				socialIcons={[
					{
						icon: Icons.mailIcon,
						href: "mailto:dlhbdissanayake@gmail.com",
						altText: "Email (Haritha Dissanayake)",
					},
					{
						icon: Icons.githubIcon,
						href: "https://github.com/axisgreen",
						altText: "Github (@axisgreen)",
					},
					{
						icon: Icons.linkedinIcon,
						href: "https://linkedin.com/in/haritha-dissanayake-a49661180",
						altText: "LinkedIn (Haritha Dissanayake)",
					},
				]}
			/>
			{/* Attribution */}
			<div className="my-auto text-sm sm:text-base">
				&copy; Haritha Dissanayake 2021
			</div>
		</div>
	);
};

export default Footer;
