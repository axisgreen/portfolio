// Top most div for the app content
const AppContainer: React.FC = ({ children }) => {
	return <div className="p-4 flex flex-col min-h-screen">{children}</div>;
};

export default AppContainer;
