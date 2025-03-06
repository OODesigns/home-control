import { useState } from "react";
import PropTypes from "prop-types";
import IncreaseSpeed from "./IncreaseSpeed.jsx";
import DecreaseSpeed from "./DecreaseSpeed.jsx";
import FanDisplay from "./FanDisplay.jsx";
import FanBoostButton from "./FanBoostButton.jsx";
import useRotation from "./useRotation.js";
import "./FanSpeedControl.css";
import VerticalLayout from "../VerticalContainer/VerticalContainer.jsx";

export default function FanSpeedControl({ onSpeedChange, onBoostChange, initialSpeed = 2, initialBoost = false }) {
    const [speed, setSpeed] = useState(initialSpeed);
    const [boostActive, setBoostActive] = useState(initialBoost);

    const handleSpeedChange = (delta) => {
        setSpeed((currentSpeed) => {
            const newSpeed = Math.max(0, currentSpeed + delta);
            if (onSpeedChange) onSpeedChange(newSpeed);
            return newSpeed;
        });
    };

    const toggleBoost = () => {
        setBoostActive( (boostState) => {
            const newBoostState = !boostState;
            if (onBoostChange) onBoostChange(newBoostState);
            return newBoostState;
        });
    };

    return (
        <VerticalLayout style={{alignContent: "center"}}>
        <div className="fan-speed-control">
            <IncreaseSpeed onClick={() => handleSpeedChange(1)} />
            {<FanBoostButton boostActive={boostActive} toggleBoost={toggleBoost} fanGroupRef={useRotation(boostActive)}/>}
            <FanDisplay speed={speed} />
            <DecreaseSpeed onClick={() => handleSpeedChange(-1)} />
        </div>
        </VerticalLayout>
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
