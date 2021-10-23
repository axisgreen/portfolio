import React from "react";

interface Props {
  buttonText: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<Props> = ({ buttonText, onClick }: Props) => {
  // bg-gradient-to-l from-green-500 to-blue-500
  return (
    <button
      className="bg-green-500 p-3 rounded-sm hover:shadow-md text-white font-medium transition-all hover:bg-green-600"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
