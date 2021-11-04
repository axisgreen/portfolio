import ReactTooltip from "react-tooltip";

interface Props {
  icon: string;
  tooltip: string;
}

const TechBadge: React.FC<Props> = ({ icon, tooltip }) => {
  return (
    <div>
      <div
        data-tip={tooltip}
        className="bg-black bg-opacity-50 hover:bg-opacity-75 transition-all rounded-md p-2"
      >
        <img
          src={icon}
          alt={tooltip}
          width="20px"
          height="20px"
          className="rounded-sm"
          style={{ minHeight: "20px", minWidth: "20px" }}
        />
      </div>
      {/* Tooltip */}
      <ReactTooltip place="bottom" effect="solid" backgroundColor="black" />
    </div>
  );
};

export default TechBadge;
