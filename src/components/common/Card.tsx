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
			<div className="w-72 h-auto flex flex-col justify-center p-2 m-2 hover:bg-white  hover:shadow-xl hover:text-black transition-all rounded-md border">
				<img
					src="https://via.placeholder.com/250x200"
					alt="Card"
					className="rounded-md"
				/>
				<div className="text-xl font-semibold mt-4 mb-2">Card Title</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					vitae iure deserunt ratione velit!
				</div>
			</div>
		</NavLink>
	);
};

export default Card;
