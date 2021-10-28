import React from "react";

interface Props {
	buttonText: string;
	onClick?: () => void;
}
const SecondaryButton: React.FC<Props> = ({ buttonText, onClick }) => {
	return (
		<button
			className="border border-green-500 text-green-500 p-3 rounded-md hover:shadow-md font-medium hover:bg-green-500 hover:border-green-500 hover:text-white transition-all"
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
};
export default SecondaryButton;
