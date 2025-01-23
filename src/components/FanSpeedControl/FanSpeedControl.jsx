import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import FanButton from "./FanButton.jsx";
import FanDisplay from "./FanDisplay.jsx";
import FanBoostButton from "./FanBoostButton.jsx";
import "./FanSpeedControl.css";

export default function FanSpeedControl({ onSpeedChange, onBoostChange, initialSpeed = 2, initialBoost = false }) {
    const [speed, setSpeed] = useState(initialSpeed);
    const [boostActive, setBoostActive] = useState(initialBoost);
    const fanGroupRef = useRef(null);
    const rotationRef = useRef(0);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        if (boostActive) {
            startRotation();
        } else {
            stopRotation();
        }

        return () => stopRotation();
    }, [boostActive]);

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

    const startRotation = () => {
        const speed = 60; // degrees per second
        const rotate = () => {
            rotationRef.current = (rotationRef.current + (speed / 60)) % 360;
            if (fanGroupRef.current) {
                fanGroupRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
            }
            animationFrameRef.current = requestAnimationFrame(rotate);
        };
        rotate();
    };

    const stopRotation = () => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
    };

    return (
        <div className="fan-speed-control">
            <FanButton caption="Increase Speed" onClick={() => handleSpeedChange(1)} />
            <FanBoostButton boostActive={boostActive} toggleBoost={toggleBoost} fanGroupRef={fanGroupRef} />
            <FanDisplay speed={speed} />
            <FanButton caption="Decrease Speed" onClick={() => handleSpeedChange(-1)} />
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