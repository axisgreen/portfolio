import React, { createContext, useEffect, useState } from "react";

interface IViewportContext {
	width: number;
	height: number;
}

const ViewportContext = createContext<IViewportContext>({
	width: window.innerWidth,
	height: window.innerHeight,
});

const ViewportBreakpoints = {
	mobile: 640,
	tablet: 768,
	laptop: 1024,
	desktop: 1280,
	ultrawide: 1920,
};

const ViewportProvider: React.FC = ({ children }) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const updateViewport = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	// Bind provider to 'resize' window event on mount and destroy on unmount
	useEffect(() => {
		window.addEventListener("load", updateViewport);
		window.addEventListener("resize", updateViewport);
		return () => {
			window.removeEventListener("resize", updateViewport);
			window.removeEventListener("load", updateViewport);
		};
	}, []);

	return (
		<ViewportContext.Provider value={{ width, height }}>
			{children}
		</ViewportContext.Provider>
	);
};

export { ViewportContext, ViewportProvider, ViewportBreakpoints };
