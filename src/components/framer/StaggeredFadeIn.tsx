import { motion } from "framer-motion";

interface Props {
	i: number;
	transitionDelay?: number;
	className?: string;
}

const StaggeredFadeIn: React.FC<Props> = ({
	i,
	transitionDelay = 0.2,
	className,
	children,
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
		>
			{children}
		</motion.div>
	);
};

export default StaggeredFadeIn;
