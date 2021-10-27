import React from "react";
import { CSSTransition } from "react-transition-group";
import "./FadeIn.css";

interface Props {
	trigger: boolean;
	timeout: number;
}

const FadeIn: React.FC<Props> = ({ trigger, timeout, children }) => {
	return (
		<CSSTransition
			in={trigger}
			timeout={timeout}
			classNames="fade-in"
			unmountOnExit
		>
			{children}
		</CSSTransition>
	);
};

export default FadeIn;
