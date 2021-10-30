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
			<div className="flex flex-col sm:flex-row p-4 m-2 hover:bg-white hover:shadow-xl hover:text-black transition-all rounded-md">
				<img
					src="https://via.placeholder.com/250x200"
					alt="Card"
					className="rounded-md"
				/>
				<div className="flex flex-col px-8 py-4">
					<div className="text-xl font-semibold mt-4 mb-2">{title}</div>
					<div>{description.slice(0, 250)}...</div>
				</div>
			</div>
		</NavLink>
	);
};

export default Card;
