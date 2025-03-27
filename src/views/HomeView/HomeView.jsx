import NavigationalContainer from '../../components/NavigationalContainer/NavigationalContainer';
import FanSpeedControl from '../../components/FanSpeedControl/FanSpeedControl';
import HorizontalContainer from "../../components/HorizontalContainer/HorizontalContainer.jsx";
import VentModeSelector from "../../components/SelectSwitch/VentModeSelector";
import {useState} from "react";
import TemperatureDial from "../../components/TemperatureDial/TemperatureDial";
import VerticalContainer from "../../components/VerticalContainer/VerticalContainer";
import FadingContainer from "../../components/FadingContainer/FadingContainer";
import ResponsiveLayout from "../../components/ResponsiveLayout/ResponsiveLayout";
import ShowerIcon from "../../components/Icons/ShowerIcon";
import ExerciseIcon from "../../components/Icons/ExerciseIcon";
import KitchenIcon from "../../components/Icons/KitchenIcon";
import BathIcon from "../../components/Icons/BathIcon";
import StairsIcon from "../../components/Icons/StairsIcon";

export default function HomeView() {
    const [selectedMode, setSelectedMode] = useState("auto");
    const [status] = useState("exchanging");
    const [triggeredBySensor, setTriggeredBySensor ] = useState(false);
    const [isBoostActive, setIsBoostActive] = useState(false);

    const handleSpeedChange = (newSpeed) => {
        console.log(`Speed changed to: ${newSpeed}`);
    };

    const handleBoostChange = () => {
        setIsBoostActive((isBoostActive) => {
            const newBoostValue = !isBoostActive;
            setTriggeredBySensor(newBoostValue);
            return newBoostValue;
        });
    };

    const handleOnSelect = (selectedMode) => {
        setSelectedMode(selectedMode);
    }

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
                       <FadingContainer show={triggeredBySensor}>
                           <ResponsiveLayout>
                            <StairsIcon value={55}/>
                            <KitchenIcon value={45}/>
                            <ShowerIcon value={35}/>
                            <ExerciseIcon value={67}/>
                            <BathIcon value={34}/>
                           </ResponsiveLayout>
                       </FadingContainer>
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