import { motion, MotionStyle } from "framer-motion";

interface Props {
	i: number;
	transitionDelay?: number;
	className?: string;
	style?: MotionStyle;
}

const StaggeredFadeIn: React.FC<Props> = ({
	i,
	transitionDelay = 0.2,
	className,
	children,
	style,
}) => {
	return (
		<motion.div
			key={i}
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
			}}
			transition={{ delay: transitionDelay * i }}
			className={className}
			style={style}
		>
			{children}
		</motion.div>
	);
};

export default StaggeredFadeIn;
