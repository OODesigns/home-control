import React from "react";
import PropTypes from "prop-types";
import './Step.scss'

const Step = ({ angle, isActive, onClick }) => {
    const SIZE_VMIN = 70;
    const RADIUS = SIZE_VMIN / 2;
    const INNER_RADIUS_FOR_STEP = RADIUS * 0.8;

    const x = ((INNER_RADIUS_FOR_STEP * Math.cos((angle * Math.PI) / 180)) + RADIUS).toFixed(2) + "vmin";
    const y = ((INNER_RADIUS_FOR_STEP * Math.sin((angle * Math.PI) / 180)) + RADIUS).toFixed(2) + "vmin";

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            onClick();
        }
    };

    return (
        <div
            className={`step ${isActive ? "active" : ""}`}
            style={{ left: x, top: y }}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-pressed={isActive}
        />
    );
};

Step.propTypes = {
    angle: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Step;
