import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
				className="flex flex-col sm:flex-row max-w-3xl p-4 m-2 hover:bg-white hover:shadow-xl hover:text-black transition-all rounded-md"
				onMouseEnter={() => setShowThumbnail(false)}
				onMouseLeave={() => setShowThumbnail(true)}
			>
				{showThumbnail ? (
					<motion.div
						initial={{ opacity: 0, scale: 1 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 1.1 }}
						className="flex justify-center"
					>
						<img
							src={thumbnail}
							alt="Project Card Thumbnail"
							className="rounded-md"
							width={200}
							height={150}
						/>
					</motion.div>
				) : (
					<motion.div
						initial={{ opacity: 0, scale: 1 }}
						animate={{ opacity: 1, scale: 1.1 }}
						exit={{ opacity: 0, scale: 1 }}
						className="flex justify-center"
					>
						<img
							src={hoverImage}
							alt="Card"
							className="rounded-md"
							width={200}
							height={150}
						/>
					</motion.div>
				)}

				<div className="flex flex-col px-2 py-8 sm:px-8 sm: gap-2 justify-center">
					<div className="text-xl font-semibold">{title}</div>
					<div className="max-w-md">{description.slice(0, 120)}...</div>
				</div>
			</div>
		</NavLink>
	);
};

export default ProjectCard;
