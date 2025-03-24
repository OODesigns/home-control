import { useState } from "react";
import PropTypes from "prop-types";
import IncreaseSpeed from "./IncreaseSpeed.jsx";
import DecreaseSpeed from "./DecreaseSpeed.jsx";
import FanDisplay from "./FanDisplay.jsx";
import FanBoostButton from "./FanBoostButton.jsx";
import useRotation from "./useRotation.js";
import VerticalLayout from "../VerticalContainer/VerticalContainer.jsx";

export default function FanSpeedControl({ onSpeedChange, onBoostChange, initialSpeed = 2, isBoosting = false }) {
    const [speed, setSpeed] = useState(initialSpeed);

    const handleSpeedChange = (delta) => {
        setSpeed((currentSpeed) => {
            const newSpeed = Math.max(0, currentSpeed + delta);
            if (onSpeedChange) onSpeedChange(newSpeed);
            return newSpeed;
        });
    };

    return (
        <VerticalLayout id="fan-speed-control">
            <IncreaseSpeed onClick={() => handleSpeedChange(1)} />
            {<FanBoostButton boostActive={isBoosting} toggleBoost={onBoostChange} fanGroupRef={useRotation(isBoosting)}/>}
            <FanDisplay speed={speed} />
            <DecreaseSpeed onClick={() => handleSpeedChange(-1)} />
        </VerticalLayout>
    );
}

FanSpeedControl.propTypes = {
    onSpeedChange: PropTypes.func.isRequired,
    onBoostChange: PropTypes.func.isRequired,
    initialSpeed: PropTypes.number,
    isBoosting: PropTypes.bool,
};
