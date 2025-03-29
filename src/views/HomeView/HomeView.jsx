import NavigationalContainer from '../../components/NavigationalContainer/NavigationalContainer';
import FanSpeedControl from '../../components/FanSpeedControl/FanSpeedControl';
import HorizontalContainer from "../../components/HorizontalContainer/HorizontalContainer.jsx";
import VentModeSelector from "../../components/SelectSwitch/VentModeSelector";
import {useState} from "react";
import TemperatureDial from "../../components/TemperatureDial/TemperatureDial";
import VerticalContainer from "../../components/VerticalContainer/VerticalContainer";
import SensorDisplay from "../../components/SensorDisplay/SensorDisplay";

export default function HomeView() {
    const [selectedMode, setSelectedMode] = useState("auto");
    const [status] = useState("exchanging");
    const [isBoostActive, setIsBoostActive] = useState(false);

    const handleSpeedChange = (newSpeed) => {
        console.log(`Speed changed to: ${newSpeed}`);
    };

    const handleBoostChange = () => {
        setIsBoostActive((isBoostActive) => {
            const newBoostValue = !isBoostActive;
            return newBoostValue;
        });
    };

    const handleOnSelect = (selectedMode) => {
        setSelectedMode(selectedMode);
    }

    const sensorData = [
        { type: "humidity", option: "bath", value: 55 },
        { type: "particle", value: 1.3 },
        { type: "voc", value: 20 },
        { type: "co", value: 700 },
    ];

    return (
        <NavigationalContainer caption="Home">
            <div className="home-view">
                <HorizontalContainer className="home-view__left">
                   <VerticalContainer>
                    <VentModeSelector
                        selectedMode={selectedMode}
                        onSelect={handleOnSelect}
                        status={status}
                    />
                   <SensorDisplay sensorData={sensorData}/>
                   </VerticalContainer>
                </HorizontalContainer>
                {/* Middle Flexible and Centered */}
                <HorizontalContainer className="home-view__middle">
                    <TemperatureDial />
                </HorizontalContainer>
                <HorizontalContainer className="home-view__right">
                    <FanSpeedControl
                        onSpeedChange={handleSpeedChange}
                        onBoostChange={handleBoostChange}
                        initialSpeed={2}
                        isBoosting={isBoostActive}
                    />
                </HorizontalContainer>
            </div>
        </NavigationalContainer>
    );
}