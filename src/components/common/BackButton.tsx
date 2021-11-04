import { useHistory } from "react-router";
import { Icons } from "../../assets/assets";
import "./BackButton.css";

const BackButton: React.FC = () => {
  const history = useHistory();
  return (
    <button
      className="rounded-md p-2 hover:shadow-lg hover:bg-white hover:text-black transition-all chevron-parent"
      onClick={() => history.goBack()}
    >
      <div className="flex gap-2 items-center">
        <img
          src={Icons.chevronLeft}
          alt="Back"
          width="10px"
          height="10px"
          className="chevron-left"
        />
        Back
      </div>
    </button>
  );
};

export default BackButton;
