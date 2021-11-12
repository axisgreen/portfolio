import { motion } from "framer-motion";

interface Props {
	transitionDelay?: number;
	className: string;
}

const FadeUp: React.FC<Props> = ({
	transitionDelay = 0.2,
	className,
	children,
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
		>
			{children}
		</motion.div>
	);
};

export default FadeUp;
