import { NavLink } from "react-router-dom";

interface Props {
	title: string;
	description: string;
	image: string;
	link: string;
}

const Card: React.FC<Props> = ({ title, description, image, link }) => {
	return (
		<NavLink exact to={link}>
			<div className="flex flex-col sm:flex-row max-w-3xl p-4 m-2 hover:bg-white hover:shadow-xl hover:text-black transition-all rounded-md">
				<img
					src="https://via.placeholder.com/250x200"
					alt="Card"
					className="rounded-md"
				/>
				<div className="flex flex-col px-2 py-8 sm:px-8 sm: gap-2 justify-center">
					<div className="text-xl font-semibold">{title}</div>
					<div>{description.slice(0, 250)}...</div>
				</div>
			</div>
		</NavLink>
	);
};

export default Card;
