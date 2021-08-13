import "./AddButton.css";
import { FaPlus } from "react-icons/fa";
const AddButton = (props) => {
  return (
    <div className="wrapper">
      <div className="icon facebook">
        <div className="tooltip">Add Expense</div>
        <FaPlus />
      </div>
    </div>
  );
};

export default AddButton;
