import { HTMLInputTypeAttribute } from "react";

interface Props {
	name: string;
	type?: HTMLInputTypeAttribute;
	isTextArea?: boolean;
	label: string;
}

const InputField: React.FC<Props> = ({ name, type, isTextArea, label }) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name} className="font-semibold">
				{label}
			</label>
			{!isTextArea ? (
				<input
					type={type || "text"}
					name={name}
					className="rounded-sm w-full p-2 bg-gray-900 focus:bg-white transition-all focus:text-black text-white"
				/>
			) : (
				<textarea
					name={name}
					className="rounded-sm w-full p-2 bg-gray-900 focus:bg-white transition-all focus:text-black"
					rows={10}
				></textarea>
			)}
		</div>
	);
};

export default InputField;
