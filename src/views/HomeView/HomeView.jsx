import NavigationalContainer from '../../components/NavigationalContainer/NavigationalContainer';
import FanSpeedControl from '../../components/FanSpeedControl/FanSpeedControl';
import HorizontalContainer from "../../components/HorizontalContainer/HorizontalContainer.jsx";
import './HomeView.scss';
import SelectSwitch from "../../components/SelectSwitch/SelectSwitch"; // Import the SCSS file

export default function HomeView() {
    const handleSpeedChange = (newSpeed) => {
        console.log(`Speed changed to: ${newSpeed}`);
    };

    const handleBoostChange = (boostActive) => {
        console.log(`Boost is now: ${boostActive ? 'Active' : 'Inactive'}`);
    };

    const handleSelectSwitch = (region) => {}

    return (
        <NavigationalContainer caption="Home">
            <div className="home-view">
                {/* Left Fixed 25% */}
                <HorizontalContainer className="home-view__left">
                    <SelectSwitch onRegionChange={handleSelectSwitch}/>
                </HorizontalContainer>
                {/* Middle Flexible and Centered */}
                <HorizontalContainer className="home-view__middle">
                </HorizontalContainer>
                {/* Right Fixed 25% */}
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