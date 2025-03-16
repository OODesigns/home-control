import React from "react";
import PropTypes from "prop-types";
import Step from "./Step";

const StepsContainer = ({ targetTemperature, onStepClick }) => {
    const MIN_TEMP = 15;
    const STEP_ANGLES = [
        -225.0, -207.0, -189.0, -171.0, -153.0, -135.0, -117.0, -99.0,
        -81.0, -63.0, -45.0, -27.0, -9.0, 9.0, 27.0, 45.0
    ];

    return (
        <>
            {STEP_ANGLES.map((angle, index) => (
                <Step
                    key={angle}
                    angle={angle}
                    isActive={targetTemperature === MIN_TEMP + index}
                    onClick={() => onStepClick(index)}
                />
            ))}
        </>
    );
};

StepsContainer.propTypes = {
    targetTemperature: PropTypes.number.isRequired,
    onStepClick: PropTypes.func.isRequired,
};

export default StepsContainer;
