import React from "react";
import VentMode from "./VentMode";
import PropTypes from "prop-types";

const AutoMode = ({isSelected, onSelect}) => {
    return(<VentMode
        path="M 271.24355652982143 220 A 140 140 0 0 1 28.75644347017858 220 L 80.7179676972449 190 A 80 80 0 0 0 219.2820323027551 190 Z"
        textPath="m 70.591028,195.84679 c 16.055575,26.50519 45.608592,44.27802 79.408902,44.27802 33.80043,0 63.35347,-17.77283 79.40906,-44.27801"
        text="AUTO"
        dominantBaseline="hanging"
        isSelected={isSelected}
        onSelect={onSelect}
    />);
}

AutoMode.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default AutoMode;

