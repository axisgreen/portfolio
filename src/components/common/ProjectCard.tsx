import { useState } from "react";
import { NavLink } from "react-router-dom";
import ScaleOutReveal from "../framer/ScaleOutReveal";

interface Props {
	title: string;
	description: string;
	thumbnail: string;
	hoverImage?: string;
	link: string;
}

const ProjectCard: React.FC<Props> = ({
	title,
	description,
	thumbnail,
	hoverImage,
	link,
}) => {
	const [showThumbnail, setShowThumbnail] = useState(true);

	return (
		<NavLink exact to={link}>
			<div
				className="flex flex-col sm:flex-row max-w-3xl p-4 m-2 hover:bg-white hover:shadow-xl hover:text-black transition-all rounded-md gap-8"
				onMouseEnter={() => setShowThumbnail(false)}
				onMouseLeave={() => setShowThumbnail(true)}
			>
				<ScaleOutReveal
					reveal={showThumbnail}
					thumbnail={thumbnail}
					imageToReveal={hoverImage}
				/>
				<div className="flex flex-col sm:gap-2 justify-center ">
					<div className="text-xl font-semibold">{title}</div>
					<div className="max-w-md">{description.slice(0, 180)}...</div>
				</div>
			</div>
		</NavLink>
	);
};

export default ProjectCard;
