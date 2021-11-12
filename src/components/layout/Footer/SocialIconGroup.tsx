import "./SocialIconGroup.css";

interface SocialIcon {
	icon: string;
	href: string;
	altText: string;
}

interface Props {
	socialIcons: SocialIcon[];
}

const SocialIconGroup: React.FC<Props> = ({ socialIcons }) => {
	return (
		<div className="flex 2xl:justify-center gap-1 2xl:my-1">
			{socialIcons.map((socialIcon, i) => {
				return (
					<div className="icon-tile hover:bg-black rounded-md p-2 transition-all cursor-pointer">
						<a href={socialIcon.href} target="_blank" rel="noreferrer">
							<img src={socialIcon.icon} alt={socialIcon.altText} />
						</a>
					</div>
				);
			})}
		</div>
	);
};

export default SocialIconGroup;
