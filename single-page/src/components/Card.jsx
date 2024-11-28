import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="border-2 border-solid border-stone-100 border-opacity-40 p-6 shadow-lg w-2/6">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div className="mt-5">
        <h3 className="font-manrope font-semibold">{props.name}</h3>
        <p className="font-manrope text-gray-400 font-light">{props.job}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};

export default Card;
