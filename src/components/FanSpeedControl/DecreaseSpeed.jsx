import FanButton from "./FanButton.jsx";
import PropTypes from "prop-types";

export default function DecreaseSpeed({ onClick }) {
    return (
        <FanButton
            ariaLabel="Decrease Speed"
            onClick={onClick}
            polylineCoords={{
                start: { x: 35, y: 56 },
                middle: { x: 60, y: 81 },
                end: { x: 85, y: 56 },
            }}
        />
    );
}

DecreaseSpeed.propTypes = {
    onClick: PropTypes.func.isRequired,
}

