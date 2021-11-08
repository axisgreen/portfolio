import React from "react";

interface Props {
	buttonText: string;
	buttonIcon?: string;
	disabled?: boolean;
	fullWidth?: boolean;
	onClick?: () => void;
}

const PrimaryButton: React.FC<Props> = ({
	buttonText,
	buttonIcon,
	disabled,
	fullWidth,
	onClick,
}: Props) => {
	const buttonActive = `bg-green-500 hover:shadow-md transition-all hover:bg-green-600 text-white `;
	const buttonDisabled = `bg-transparent border border-green-500`;
	return (
		<button
			className={`${
				disabled ? buttonDisabled : buttonActive
			} p-3 rounded-md font-medium ${fullWidth && "w-full"}`}
			disabled={disabled}
			onClick={onClick}
		>
			<div className="flex gap-2 justify-center items-center">
				{buttonIcon && (
					<img
						src={buttonIcon}
						width="20px"
						height="20px"
						className="filter invert"
						alt="Primary Button"
					/>
				)}
				{buttonText}
			</div>
		</button>
	);
};

export default PrimaryButton;
