import React, { useState } from "react";
import TemperatureValue from "./TemperatureValue";
import StepsContainer from "./StepContainer";

const MIN_TEMP = 15;

const TemperatureDial = () => {
    const [targetTemperature, setTargetTemperature] = useState(22);
    const [actualTemperature, setActualTemperature] = useState(20);

    const handleStepClick = (index) => {
        setTargetTemperature(MIN_TEMP + index);
    };

    return (
        <div className="temperature-dial">
            <TemperatureValue text={`Target: ${targetTemperature}°C`} position="40%" fontSize="5"/>
            <TemperatureValue text={`Room: ${actualTemperature}°C`} position="60%" fontSize="3.5"/>
            <StepsContainer targetTemperature={targetTemperature} onStepClick={handleStepClick} />
        </div>
    );
};

export default TemperatureDial;
