import { useContext, useState } from "react";
import { Icons } from "../assets/assets";
import PrimaryButton from "../components/common/PrimaryButton";
import TechBadge from "../components/common/TechBadge";
import MobileShowcaseCarousel from "../components/view/ProjectDetailView/MobileShowcaseCarousel";
import WebShowcaseCarousel from "../components/view/ProjectDetailView/WebShowcaseCarousel";
import { ViewportContext } from "../contexts/ViewportContext";

const ProjectDetailView: React.FC = () => {
	const { height } = useContext(ViewportContext);
	// Sets the min height for the project info tile if the screen is taller than convention
	const minHeightForTallScreens =
		height > 1080 ? "sm:min-h-63v" : "sm:min-h-80v";

	const [projectType, setProjectType] = useState<"mobile" | "web">("web");
	return (
		<div className="flex flex-1 flex-col-reverse lg:flex-row justify-center gap-8 3xl:gap-16 my-4 xl:mx-0 text-white">
			<div
				className={`bg-gray-800 shadow-xl rounded-md md:px-14 overflow-y-scroll inline self-center ${minHeightForTallScreens} max-h-80v 3xl:min-h-63v 3xl:max-h-63v my-auto`}
			>
				<div className="lg:max-w-sm max-h-96">
					<div className="flex flex-col gap-4 py-10 px-10 md:px-0">
						<div className="text-3xl font-semibold">Project Name</div>
						<div className="flex gap-1">
							<TechBadge icon={Icons.flutterIcon} tooltip="Flutter" />
							<TechBadge icon={Icons.flutterIcon} tooltip="Flutter" />
							<TechBadge icon={Icons.flutterIcon} tooltip="Flutter" />
							<TechBadge icon={Icons.flutterIcon} tooltip="Flutter" />
							<TechBadge icon={Icons.flutterIcon} tooltip="Flutter" />
							<TechBadge icon={Icons.flutterIcon} tooltip="Flutter" />
						</div>
						<div className="p-4 border rounded-md hover:bg-white hover:text-black transition-all">
							Related to Work Experience
						</div>
						<div>
							Project Description - Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Nihil reiciendis ratione maxime doloribus
							laborum. Incidunt minima quam in optio quas a laborum illo cumque
							nesciunt, quis consequatur id, sed doloremque! Lorem ipsum dolor
							sit amet, consectetur adipisicing elit. Incidunt voluptates
							aspernatur maxime, consequuntur optio ratione adipisci commodi
							labore eaque, ea doloribus explicabo molestiae repellat aut
							possimus cum eveniet. Consectetur, voluptatem. Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Nihil reiciendis ratione
							maxime doloribus laborum. Incidunt minima quam in optio quas a
							laborum illo cumque nesciunt, quis consequatur id, sed doloremque!
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
							voluptates aspernatur maxime, consequuntur optio ratione adipisci
							commodi labore eaque, ea doloribus explicabo molestiae repellat
							aut possimus cum eveniet. Consectetur, voluptatem.
						</div>

						<PrimaryButton buttonText="Live Demo" />
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center">
				{projectType === "mobile" ? (
					<MobileShowcaseCarousel />
				) : (
					<WebShowcaseCarousel />
				)}
			</div>
		</div>
	);
};

export default ProjectDetailView;
