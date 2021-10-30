import React from "react";

interface Props {
	buttonText: string;
	buttonIcon?: string;

	onClick?: () => void;
}

const PrimaryButton: React.FC<Props> = ({
	buttonText,
	buttonIcon,
	onClick,
}: Props) => {
	// bg-gradient-to-l from-green-500 to-blue-500
	return (
		<button
			className="bg-green-500 p-3 rounded-md hover:shadow-md text-white font-medium transition-all hover:bg-green-600"
			onClick={onClick}
		>
			<div className="flex gap-2 justify-center items-center">
				{buttonIcon && (
					<img
						src={buttonIcon}
						width="20px"
						height="20px"
						className="filter invert"
					/>
				)}
				{buttonText}
			</div>
		</button>
	);
};

export default PrimaryButton;
