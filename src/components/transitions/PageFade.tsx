import { motion } from "framer-motion";

const Fade: React.FC = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.1 }}
			exit={{ opacity: 0 }}
			className="my-auto"
		>
			{children}
		</motion.div>
	);
};

export default Fade;
