import React from "react";
import PrimaryButton from "../components/common/Button";

const MainView: React.FC = () => {
	return (
		<div className="flex h-full flex-col justify-end p-10 m-10 py-64 my-32 ">
			<div className="uppercase text-lg">haritha dissanayake</div>
			<div className="text-6xl">Full-stack Developer</div>
			<div className="text-base">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
				error, provident fugit quam animi veniam aliquam vitae adipisci
				voluptatum? Velit aut, voluptate perferendis maiores atque aliquam
				sapiente ipsum fuga dolorum.
			</div>
			<div className="flex gap-2 my-2">
				<PrimaryButton buttonText="Get in Touch" />
				<PrimaryButton buttonText="Get in Touch" />
			</div>
		</div>
	);
};

export default MainView;
