import PropTypes from "prop-types";
import HorizontalContainer from "../HorizontalContainer/HorizontalContainer.jsx";
import SmallSvgButton from "../SmallSvgButton/SmallSvgButton.jsx";

const NavigationControl = ({onLeftNavigationClick, onRightNavigationClick}) => {
    return (
        <HorizontalContainer id="navigation-control">
            <SmallSvgButton onClick={onLeftNavigationClick}
                            ariaLabel={"Left navigation"}
                            path="M20 24 l-8 -8 l8 -8"
                            pathId=""
            />
            <SmallSvgButton onClick={onRightNavigationClick}
                            ariaLabel={"Right navigation"}
                            path="M12 24 l8 -8 l-8 -8"
                            pathId=""
            />
        </HorizontalContainer>
    )
}

NavigationControl.propTypes = {
    onLeftNavigationClick:PropTypes.func,
    onRightNavigationClick:PropTypes.func,
}

export default NavigationControl;