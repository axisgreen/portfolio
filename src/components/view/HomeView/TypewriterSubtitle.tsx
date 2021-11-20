import Typist from "react-typist";

interface Props {
	backspaceDelay?: number;
}

/**
 * This animation types out each word on the list,
 * backspaces it and writes the next one until
 * the last one is reached
 */
const TypewriterSubtitle: React.FC<Props> = ({ backspaceDelay = 1000 }) => {
	const textList = ["<", "Web", "Mobile", "Full-stack Developer />"];
	return (
		<div className="mx-1 py-4 text-xl sm:text-2xl lg:text-4xl font-mono">
			<div className="flex">
				<Typist
					cursor={{
						show: true,
						blink: true,
					}}
				>
					{textList[0]}
					{textList[1]}
					<Typist.Backspace count={textList[1].length} delay={backspaceDelay} />
					{textList[2]}
					<Typist.Backspace count={textList[2].length} delay={backspaceDelay} />
					{textList[3]}
				</Typist>
			</div>
		</div>
	);
};

export default TypewriterSubtitle;
