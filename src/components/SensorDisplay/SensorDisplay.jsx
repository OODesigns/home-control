// Dashboard.jsx
import React from "react";
import FadingContainer from "../FadingContainer/FadingContainer";
import ResponsiveLayout from "../ResponsiveLayout/ResponsiveLayout";
import HumidityContainer from "../HumidityContainer/HumidityContainer";
import PMStrs from "../Icons/PMStrs";
import VocStrs from "../Icons/VocStrs";
import COStrs from "../Icons/COStrs";

const sensorComponentMap = {
    humidity: HumidityContainer,
    particle: PMStrs,
    voc: VocStrs,
    co: COStrs,
};

const SensorDisplay = ({ sensorData }) => {
    const triggeredBySensor = sensorData && sensorData.length > 0;
    return (
        <FadingContainer show={triggeredBySensor}>
            <ResponsiveLayout>
                {sensorData.map((sensor, index) => {
                    const Component = sensorComponentMap[sensor.type];
                    if (!Component) return null;
                    return <Component key={index} {...sensor} />;
                })}
            </ResponsiveLayout>
        </FadingContainer>
    );
};

export default SensorDisplay;