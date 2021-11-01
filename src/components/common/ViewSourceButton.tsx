interface Props {
	buttonText: string;
	buttonIcon?: string;
	fullWidth?: boolean;
	onClick?: () => void;
}

const ViewSourceButton: React.FC<Props> = ({
	buttonText,
	buttonIcon,
	fullWidth,
	onClick,
}: Props) => {
	return (
		<button
			className={`border p-3 rounded-md hover:bg-black hover:border-transparent hover:shadow-md text-white font-medium transition-all ${
				fullWidth && "w-full"
			}`}
			onClick={onClick}
		>
			<div className="flex gap-2 justify-center items-center">
				{buttonIcon && (
					<img
						src={buttonIcon}
						width="20px"
						height="20px"
						className="filter invert"
						alt="View Source Button"
					/>
				)}
				{buttonText}
			</div>
		</button>
	);
};

export default ViewSourceButton;
