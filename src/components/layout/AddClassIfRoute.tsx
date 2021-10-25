import { useLocation } from "react-router";

type Options = {
	route: string;
	classesIfRoute: string;
};

interface Props {
	options: Options[];
	defaultClasses: string;
}

/**
 * Component returns an empty div. If current route matches to prop route, add the specified classes to the div
 * Else return a div with defaultClasses defined
 * ? My use case: This allows the home page to have 100vh, but allow other routes to scroll to accommodate more content
 */
const AddClassIfRoute: React.FC<Props> = ({
	options,
	defaultClasses,
	children,
}) => {
	const location = useLocation();
	const addClassBasedOnRoute = (options: Options[], defaultClasses: string) => {
		for (let i = 0; i < options.length; i++) {
			const option = options[i];
			if (option.route === location.pathname) {
				return (
					<div
						className={
							location.pathname === option.route
								? `${option.classesIfRoute} ${defaultClasses}`
								: `${defaultClasses}`
						}
					>
						{children}
					</div>
				);
			}
		}

		return <div className={defaultClasses}>{children}</div>;
	};

	return addClassBasedOnRoute(options, defaultClasses);
};

export default AddClassIfRoute;
