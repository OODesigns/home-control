// Dashboard.jsx
import React from "react";
import FadingContainer from "../FadingContainer/FadingContainer";
import ResponsiveLayout from "../ResponsiveLayout/ResponsiveLayout";
import HumidityContainer from "../HumidityContainer/HumidityContainer";
import PMStairs from "../Icons/PMStairs";
import VocStairs from "../Icons/VocStairs";
import COStairs from "../Icons/COStairs";

const sensorComponentMap = {
    humidity: HumidityContainer,
    particle: PMStairs,
    voc: VocStairs,
    co: COStairs,
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