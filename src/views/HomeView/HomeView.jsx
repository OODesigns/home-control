import NavigationalContainer from '../../components/NavigationalContainer/NavigationalContainer';
import FanSpeedControl from '../../components/FanSpeedControl/FanSpeedControl';
import HorizontalContainer from "../../components/HorizontalContainer/HorizontalContainer.jsx";
import './HomeView.scss';
import VentModeSelector from "../../components/SelectSwitch/VentModeSelector";
import {useState} from "react";
import TemperatureDial from "../../components/TemperatureDial/TemperatureDial"; // Import the SCSS file

export default function HomeView() {
    const [selectedMode, setSelectedMode] = useState("auto");

    const handleSpeedChange = (newSpeed) => {
        console.log(`Speed changed to: ${newSpeed}`);
    };

    const handleBoostChange = (boostActive) => {
        console.log(`Boost is now: ${boostActive ? 'Active' : 'Inactive'}`);
    };

    const handleOnSelect = (selectedMode) => {
        setSelectedMode(selectedMode);
    }

    return (
        <NavigationalContainer caption="Home">
            <div className="home-view">
                <HorizontalContainer className="home-view__left">
                    <VentModeSelector selectedMode={selectedMode} onSelect={handleOnSelect}/>
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
                        initialBoost={false}
                    />
                </HorizontalContainer>
            </div>
        </NavigationalContainer>
    );
}