import NavigationalContainer from '../../components/NavigationalContainer/NavigationalContainer';
import FanSpeedControl from '../../components/FanSpeedControl/FanSpeedControl';
import HorizontalContainer from "../../components/HorizontalContainer/HorizontalContainer.jsx";
import VentModeSelector from "../../components/SelectSwitch/VentModeSelector";
import {useState} from "react";
import TemperatureDial from "../../components/TemperatureDial/TemperatureDial";
import VerticalContainer from "../../components/VerticalContainer/VerticalContainer";
import FadingContainer from "../../components/FadingContainer/FadingContainer";
import XStairsIcon from "../../components/Icons/XStairsIcon";
import XKitchenIcon from "../../components/Icons/xKitchenIcon";
import ResponsiveLayout from "../../components/ResponsiveLayout/ResponsiveLayout";
import XExerciseIcon from "../../components/Icons/XExerciseIcon";
import XShowerIcon from "../../components/Icons/XShowerIcon";
import ExIcon from "../../components/Icons/ExIcon";
import SvgComponent from "../../components/Icons/SvgComponent";
import SvgComponent2 from "../../components/Icons/SvgComponent2";
import SvgComponent3 from "../../components/Icons/SvgComponent3";
import SvgComponent4 from "../../components/Icons/SvgComponent4";
import SvgComponent5 from "../../components/Icons/SvgComponent5";



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
                            <SvgComponent2/>
                            <SvgComponent4/>
                            <SvgComponent/>
                            <SvgComponent3/>
                               <SvgComponent5/>
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