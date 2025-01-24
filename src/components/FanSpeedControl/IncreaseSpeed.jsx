import FanButton from "./FanButton.jsx";
import PropTypes from "prop-types";

export default function IncreaseSpeed({ onClick }) {
    return (
        <FanButton
            ariaLabel="Increase Speed"
            onClick={onClick}
            rectCoords={{ x: 35, y: 56 }}
            polylineCoords={{
                start: { x: 35, y: 81 },
                middle: { x: 60, y: 56 },
                end: { x: 85, y: 81 },
            }}
        />
    );
}

IncreaseSpeed.propTypes = {
    onClick: PropTypes.func.isRequired,
}
