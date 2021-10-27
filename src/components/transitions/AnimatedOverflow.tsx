import React from "react";
import { CSSTransition } from "react-transition-group";
import "./AnimatedOverflow.css";

interface Props {
	trigger: boolean;
	timeout: number;
}

const AnimatedOverflow: React.FC<Props> = ({ trigger, timeout, children }) => {
	return (
		<CSSTransition
			in={trigger}
			timeout={timeout}
			classNames="animated-overflow"
			unmountOnExit
		>
			{children}
		</CSSTransition>
	);
};

export default AnimatedOverflow;
