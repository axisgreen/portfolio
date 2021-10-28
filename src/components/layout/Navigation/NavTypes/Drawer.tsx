import React, { createRef, useEffect, useState } from "react";
import { Icons } from "../../../../assets/assets";
import RouterLink from "../../../RouterLink";

const Drawer: React.FC = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const drawerRef = createRef<HTMLDivElement>();

	// Click away from drawer to dismiss functionality
	useEffect(() => {
		document.addEventListener("click", (event) => {
			if (drawerRef.current && event.target) {
				if (!drawerRef.current.contains(event.target as Node))
					setIsDrawerOpen(false);
			}
		});
	}, [isDrawerOpen, drawerRef]);
	return (
		<div ref={drawerRef} className="flex justify-end md:gap-5 items-center">
			<button
				onClick={() => setIsDrawerOpen(true)}
				className="hover:bg-gray-100 p-2 rounded-md transition-all menu-icon"
			>
				<img
					src={Icons.menuIcon}
					alt="Menu Icon"
					width="40px"
					height="40px"
					className=""
				/>
			</button>

			<aside
				className={`transform top-0 right-0 w-64 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
					isDrawerOpen
						? "translate-x-0 overflow-hidden"
						: "translate-x-full overflow-visible"
				}`}
			>
				<div className="flex  h-20 m-2 py-2">
					<div className="flex">
						<button
							className="text-white menu-icon px-2 hover:bg-gray-100 rounded-md transition-all"
							onClick={() => setIsDrawerOpen(false)}
						>
							<img
								src={Icons.closeIcon}
								alt="Close Navigation Drawer"
								width="40px"
								height="40px"
							/>
						</button>
					</div>
				</div>
				<div className="flex flex-col uppercase text-center text-2xl">
					<RouterLink transition to="/" linkText="Home" />
					<RouterLink transition to="/about" linkText="About" />
					<RouterLink transition to="/projects" linkText="Projects" />
					<RouterLink transition to="/experience" linkText="Experience" />
				</div>
			</aside>
		</div>
	);
};

export default Drawer;
