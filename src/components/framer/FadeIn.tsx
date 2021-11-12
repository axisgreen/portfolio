import { motion, MotionStyle } from "framer-motion";

interface Props {
	transitionDelay?: number;
	className?: string;
	style?: MotionStyle;
}

const FadeIn: React.FC<Props> = ({
	transitionDelay = 0.2,
	className,
	children,
	style,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
			}}
			transition={{ delay: transitionDelay }}
			className={className}
			style={style}
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
