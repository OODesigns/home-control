import PropTypes from "prop-types";
import HorizontalLayout from "../HorizontalContainer/HorizontalContainer.jsx";
import NavigationControl from "../NavigationControl/NavigationControl.jsx";
import PlayControl from "../PlayControl/PlayControl.jsx";
import {useState} from "react";

const Header = ({caption, onLeftNavigationClick, onRightNavigationClick, onPowerSelectClick}) => {
    const [state, setState] = useState("playing");

    const leftClick = () => {
       setState( (theState) => theState === 'playing' ? 'pause' : 'playing' );
    }


    return (
        <HorizontalLayout className="header-container">
            <NavigationControl
                onLeftNavigationClick={leftClick}
                onRightNavigationClick={onRightNavigationClick}
             />
            <span className="header-caption">{caption}</span>
            <PlayControl status={state} onClick={onPowerSelectClick} />
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

