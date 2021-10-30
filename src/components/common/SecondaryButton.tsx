import React from "react";

interface Props {
	buttonText: string;
	buttonIcon?: string;
	onClick?: () => void;
}
const SecondaryButton: React.FC<Props> = ({
	buttonText,
	buttonIcon,
	onClick,
}) => {
	return (
		<button
			className="border p-3 rounded-md hover:shadow-md font-medium hover:bg-white hover:text-black transition-all"
			onClick={onClick}
		>
			<div className="flex gap-2 justify-center items-center">
				{buttonIcon && <img src={buttonIcon} width="20px" height="20px" />}
				{buttonText}
			</div>
		</button>
	);
};
export default SecondaryButton;
