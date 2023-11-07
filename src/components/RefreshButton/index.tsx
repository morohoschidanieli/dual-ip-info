import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

interface FreshButtonProps {
  onRefresh: () => void;
}

const FreshButton = ({ onRefresh }: FreshButtonProps) => {
  return (
    <button
      className="text-black bg-transparent border-none hover:border-none focus:outline-none"
      title="Refresh"
      onClick={onRefresh}
    >
      <FontAwesomeIcon icon={faArrowsRotate} />
    </button>
  );
};

export default FreshButton;
