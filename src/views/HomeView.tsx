import React from "react";
import PrimaryButton from "../components/common/PrimaryButton";
import SecondaryButton from "../components/common/SecondaryButton";
import ExoTwoFont from "../components/fonts/ExoTwoFont";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const HomeView: React.FC = () => {
	return (
		<div className="ml-10 py-48 my-auto">
			<div className="flex flex-col justify-center 3xl:items-center">
				<ExoTwoFont>
					<div className="p-0 m-0 text-6xl lg:text-8xl">
						Haritha Dissanayake
					</div>
				</ExoTwoFont>
				<div className="mx-1 py-4 text-2xl lg:text-4xl font-mono ">
					<div className="flex">
						<Typist
							cursor={{
								show: true,
								blink: true,
								hideWhenDone: true,
							}}
						>
							&lt;Web
							<Typist.Backspace count={"Web".length} delay={1000} />
							Mobile
							<Typist.Backspace count={"Mobile".length} delay={1000} />
							Full-stack Developer /&gt;
						</Typist>
					</div>
				</div>

				<div className="flex gap-2 my-2 mx-1">
					<PrimaryButton buttonText="Get in Touch" />
					<SecondaryButton buttonText="View my work" />
				</div>
			</div>
		</div>
	);
};

export default HomeView;
