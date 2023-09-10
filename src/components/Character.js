import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Character({ id, name }) {
  return (
    <div>
      <h2>
        <Link to={`/character/${id}`}>{name}</Link>
      </h2>
    </div>
  );
}

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Character;
