import VentMode from "./VentMode";
import React from "react";
import PropTypes from "prop-types";

const MVHRMode = ({isSelected, onSelect}) => {
    return (<VentMode
        path="M 28.75644347017858 220 A 140 140 0 0 1 149.99999999999997 10 L 149.99999999999997 70 A 80 80 0 0 0 80.7179676972449 190 Z"
        textPath="M 70.591028,195.84679 C 62.454632,182.4149 57.784517,166.74046 57.784517,150 c 0,-49.77458 41.286299,-90.124796 92.215413,-90.124796"
        text="MVHR"
        isSelected={isSelected}
        onSelect={onSelect}
    />);
}

MVHRMode.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default MVHRMode;