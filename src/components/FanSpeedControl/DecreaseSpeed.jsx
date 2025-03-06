import FanButton from "./FanButton.jsx";
import PropTypes from "prop-types";

export default function DecreaseSpeed({ onClick }) {
    return (
        <FanButton
            ariaLabel="Decrease Speed"
            onClick={onClick}
            path="M 0 8 L 16 24 L 32 8"
        />
    );
}

DecreaseSpeed.propTypes = {
    onClick: PropTypes.func.isRequired,
}

