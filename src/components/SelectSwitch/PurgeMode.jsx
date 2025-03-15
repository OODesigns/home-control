import VentMode from "./VentMode";
import React from "react";
import PropTypes from "prop-types";

const PurgeMode = ({isSelected, onSelect}) => {
    return (<VentMode
        path="M 150 10 A 140 140 0 0 1 271.24355652982143 220 L 219.2820323027551 190 A 80 80 0 0 0 150 70 Z"
        textPath="m 149.99993,59.875204 c 50.92929,0 92.21558,40.350216 92.21558,90.124796 0,18.27265 -4.45077,33.71771 -11.9695,46.33006"
        text="PURGE"
        isSelected={isSelected}
        onSelect={onSelect}
    />);
}

PurgeMode.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default PurgeMode;