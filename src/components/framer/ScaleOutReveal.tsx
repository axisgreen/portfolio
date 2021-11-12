import { motion } from "framer-motion";

interface Props {
	reveal: boolean;
	thumbnail: string;
	imageToReveal?: string;
}

const ScaleOutReveal: React.FC<Props> = ({
	reveal,
	thumbnail,
	imageToReveal,
}) => {
	return (
		<>
			{reveal ? (
				<motion.div
					initial={{ opacity: 0, scale: 1 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 1.1 }}
					className="flex justify-center"
					style={{ minWidth: "200px" }}
				>
					<img
						src={thumbnail}
						alt="Thumbnail"
						className="rounded-md"
						width={200}
						height={150}
					/>
				</motion.div>
			) : (
				<motion.div
					initial={{ opacity: 0, scale: 1 }}
					animate={{ opacity: 1, scale: 1.1 }}
					exit={{ opacity: 0, scale: 1 }}
					className="flex justify-center"
					style={{ minWidth: "200px" }}
				>
					<img
						src={imageToReveal}
						alt="Revealed Image"
						className="rounded-md"
						width={200}
						height={150}
					/>
				</motion.div>
			)}
		</>
	);
};

export default ScaleOutReveal;
