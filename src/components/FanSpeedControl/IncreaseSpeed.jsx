import FanButton from "./FanButton.jsx";
import PropTypes from "prop-types";

export default function IncreaseSpeed({ onClick }) {
    return (
        <FanButton
            ariaLabel="Increase Speed"
            onClick={onClick}
            path="M 0 24 L 16 8 L 32 24"
        />
    );
}

IncreaseSpeed.propTypes = {
    onClick: PropTypes.func.isRequired,
}
