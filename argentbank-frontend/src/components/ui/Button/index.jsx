import PropTypes from "prop-types";
import "./style.css";

const Button = ({ title, onClick }) => {
  return (
    <button className="edit-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
