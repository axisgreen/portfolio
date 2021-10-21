interface Props {
	buttonText: string;
	onClick?: () => void;
}

const PrimaryButton = ({ buttonText, onClick }: Props) => {
	return (
		<button
			className="bg-green-500 p-3 rounded-md shadow-sm text-white font-medium hover:bg-green-600 transition-all"
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
};

const SecondaryButton = () => {
	return;
};

export default PrimaryButton;
