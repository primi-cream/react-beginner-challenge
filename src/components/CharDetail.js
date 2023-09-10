import PropTypes from "prop-types";

function CharDetail({ name, thumbnail, modified }) {
  return (
    <div>
      <img src={thumbnail} alt={name} />
      <div>{modified}</div>
    </div>
  );
}

CharDetail.propTypes = {
  modified: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default CharDetail;
