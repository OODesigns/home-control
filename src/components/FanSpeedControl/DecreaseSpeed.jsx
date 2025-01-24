import FanButton from "./FanButton.jsx";
import PropTypes from "prop-types";

export default function DecreaseSpeed({ onClick }) {
    return (
        <FanButton
            ariaLabel="Decrease Speed"
            onClick={onClick}
            rectCoords={{ x: 35, y: 244 }}
            polylineCoords={{
                start: { x: 35, y: 244 },
                middle: { x: 60, y: 269 },
                end: { x: 85, y: 244 },
            }}
        />
    );
}

DecreaseSpeed.propTypes = {
    onClick: PropTypes.func.isRequired,
}

