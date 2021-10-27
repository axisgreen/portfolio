import React from "react";
import "./Rotate90.css";

interface Props {
	trigger: boolean;
	timeout: number;
}

const Rotate90: React.FC<Props> = ({ trigger, timeout, children }) => {
	const rotate = trigger ? "rotate(90deg)" : "rotate(0)";
	return (
		<div style={{ transform: rotate, transition: `all ${timeout}ms linear` }}>
			{children}
		</div>
	);
};

export default Rotate90;
