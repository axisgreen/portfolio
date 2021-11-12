import React from "react";
import PrimaryButton from "../components/common/PrimaryButton";
import SecondaryButton from "../components/common/SecondaryButton";
import ExoTwoFont from "../components/fonts/ExoTwoFont";
import "react-typist/dist/Typist.css";
import PageFade from "../components/transitions/PageFade";
import { useHistory } from "react-router";
import TypewriterSubtitle from "../components/view/HomeView/TypewriterSubtitle";

const HomeView: React.FC = () => {
	const history = useHistory();
	return (
		<PageFade>
			<div className="md:ml-10 my-auto">
				<div className="flex flex-col justify-center 3xl:items-center text-white">
					<ExoTwoFont>
						<div className="p-0 m-0 text-5xl sm:text-6xl lg:text-8xl">
							Haritha Dissanayake
						</div>
					</ExoTwoFont>
					<TypewriterSubtitle />
					<div className="flex gap-2 my-2 mx-1">
						<PrimaryButton
							buttonText="Get in Touch"
							onClick={() => history.push("/contact")}
						/>
						<SecondaryButton
							buttonText="View my work"
							onClick={() => history.push("/projects")}
						/>
					</div>
				</div>
			</div>
		</PageFade>
	);
};

export default HomeView;
