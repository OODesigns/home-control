import PropTypes from "prop-types";
import "./FanDisplay.scss";

export default function FanDisplay({ speed }) {
    return <span className="speed-number">{speed}</span>;
}

FanDisplay.propTypes = {
    speed: PropTypes.number.isRequired,
};