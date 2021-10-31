import { motion } from "framer-motion";

type HeadingVariant = "page" | "section";

interface Props {
	text?: string;
	variant: HeadingVariant;
}

const Heading: React.FC<Props> = ({ text, variant, children }) => {
	const classNames =
		variant === "page"
			? "text-4xl sm:text-5xl font-semibold"
			: "text-3xl font-semibold";
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
			}}
			transition={{ duration: 0.2 }}
			className={classNames}
		>
			{text || children}
		</motion.div>
	);
};

export default Heading;
