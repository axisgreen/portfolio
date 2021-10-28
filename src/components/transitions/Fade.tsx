import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Fade.css";

interface Props {
	trigger: boolean;
	timeout: number;
}

const Fade: React.FC<Props> = ({ trigger, timeout, children }) => {
	return (
		<CSSTransition
			in={trigger}
			timeout={timeout}
			classNames="fade"
			unmountOnExit
		>
			{children}
		</CSSTransition>
	);
};

export default Fade;
