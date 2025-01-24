import PropTypes from "prop-types";
import "./FanButton.css";

export default function FanButton({ ariaLabel, onClick, rectCoords, polylineCoords }) {
    return (
        <button onClick={onClick} aria-label={ariaLabel} className="fan-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 300" className="fan-button-svg">
                <g className="vertical-arrow-area">
                    <rect
                        x={rectCoords.x}
                        y={rectCoords.y}
                        width="50"
                        height="25"
                        fill="transparent"
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
