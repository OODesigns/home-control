import { useState } from "react";
import PropTypes from "prop-types";
import IncreaseSpeed from "./IncreaseSpeed.jsx";
import DecreaseSpeed from "./DecreaseSpeed.jsx";
import FanDisplay from "./FanDisplay.jsx";
import FanBoostButton from "./FanBoostButton.jsx";
import useRotation from "./useRotation.js";
import "./FanSpeedControl.css";

export default function FanSpeedControl({ onSpeedChange, onBoostChange, initialSpeed = 2, initialBoost = false }) {
    const [speed, setSpeed] = useState(initialSpeed);
    const [boostActive, setBoostActive] = useState(initialBoost);

    // Use custom hook for rotation handling
    const fanGroupRef = useRotation(boostActive);

    const handleSpeedChange = (delta) => {
        const newSpeed = Math.max(0, speed + delta); // Prevent negative speed
        setSpeed(newSpeed);
        if (onSpeedChange) onSpeedChange(newSpeed);
    };

    const toggleBoost = () => {
        const newBoostState = !boostActive;
        setBoostActive(newBoostState);
        if (onBoostChange) onBoostChange(newBoostState);
    };

    return (
        <div className="fan-speed-control">
            <IncreaseSpeed onClick={() => handleSpeedChange(1)} />
            {/*<FanBoostButton boostActive={boostActive} toggleBoost={toggleBoost} fanGroupRef={fanGroupRef} />*/}
            <FanDisplay speed={speed} />
            <DecreaseSpeed onClick={() => handleSpeedChange(-1)} />
        </div>
    );
}

FanSpeedControl.propTypes = {
    onSpeedChange: PropTypes.func.isRequired,
    onBoostChange: PropTypes.func.isRequired,
    initialSpeed: PropTypes.number,
    initialBoost: PropTypes.bool,
};

FanSpeedControl.defaultProps = {
    initialSpeed: 2,
    initialBoost: false,
};
