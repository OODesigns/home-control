import PropTypes from "prop-types";
import HorizontalLayout from "../HorizontalContainer/HorizontalContainer.jsx";
import NavigationControl from "../NavigationControl/NavigationControl.jsx";
import PowerControl from "../PowerControl/PowerControl.jsx";

const Header = ({caption, onLeftNavigationClick, onRightNavigationClick, onPowerSelectClick}) => {
    return (
        <HorizontalLayout className="header-container">
            <NavigationControl
                onLeftNavigationClick={onLeftNavigationClick}
                onRightNavigationClick={onRightNavigationClick}
             />
            <span className="header-caption">{caption}</span>
            <PowerControl status="" onClick={onPowerSelectClick} />
        </HorizontalLayout>
    );
};

export default Header;

Header.propTypes = {
    caption: PropTypes.string.isRequired,
    onLeftNavigationClick: PropTypes.func,
    onRightNavigationClick: PropTypes.func,
    onPowerSelectClick: PropTypes.func
};

