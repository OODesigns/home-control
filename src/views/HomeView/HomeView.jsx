import NavigationalContainer from '../../components/NavigationalContainer/NavigationalContainer';
import FanSpeedControl from '../../components/FanSpeedControl/FanSpeedControl';

export default function HomeView() {
    const handleSpeedChange = (newSpeed) => {
        console.log(`Speed changed to: ${newSpeed}`);
    };

    const handleBoostChange = (boostActive) => {
        console.log(`Boost is now: ${boostActive ? 'Active' : 'Inactive'}`);
    };

    return (
        <NavigationalContainer caption="Home">
            <FanSpeedControl
                onSpeedChange={handleSpeedChange}
                onBoostChange={handleBoostChange}
                initialSpeed={2}
                initialBoost={false}
            />
        </NavigationalContainer>
    );
}