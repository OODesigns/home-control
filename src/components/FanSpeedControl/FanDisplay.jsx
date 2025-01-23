import PropTypes from "prop-types";
import "./FanDisplay.css";

export default function FanDisplay({ speed }) {
    return <span className="speed-number">{speed}</span>;
}

FanDisplay.propTypes = {
    speed: PropTypes.number.isRequired,
};