import { motion, MotionStyle } from "framer-motion";

interface Props {
	transitionDelay?: number;
	className?: string;
	style?: MotionStyle;
}

/**
 * Framer motion component for fading while sliding upwards slightly
 */
const FadeUp: React.FC<Props> = ({
	transitionDelay = 0.2,
	className,
	children,
	style,
}) => {
	return (
		<motion.div
			initial={{ translateY: 40, opacity: 0 }}
			animate={{
				translateY: 0,
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

export default FadeUp;
