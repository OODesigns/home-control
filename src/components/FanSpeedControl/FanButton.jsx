// FanButton.jsx
import PropTypes from "prop-types";
import "./FanButton.css";

export default function FanButton({ ariaLabel, onClick, polylineCoords }) {
    return (
        <button onClick={onClick} aria-label={ariaLabel} className="fan-button">
            <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="fan-button-svg">
                <g className="vertical-arrow-area">
                    <rect
                        x="0"
                        y="0"
                        width="120"
                        height="100"
                        fill="1E3A8A"
                        style={{ cursor: "pointer" }}
                    />
                    <polyline
                        className="vertical-arrow"
                        points={`${polylineCoords.start.x},${polylineCoords.start.y}
                                 ${polylineCoords.middle.x},${polylineCoords.middle.y}
                                 ${polylineCoords.end.x},${polylineCoords.end.y}`}
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                    />
                </g>
            </svg>
        </button>
    );
}

FanButton.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    rectCoords: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
    polylineCoords: PropTypes.shape({
        start: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired,
        }).isRequired,
        middle: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired,
        }).isRequired,
        end: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};
