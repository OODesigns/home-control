import React from "react";
import PropTypes from "prop-types";

const VentMode = ({id, path, textPath,  isSelected, onSelect}) => {

    const handleClick = () => {
        onSelect(id.toLowerCase());
    };

    return (
        <g className="vent-mode" role="button"  onClick={handleClick}>
            <path
                className={`vent-mode-path ${isSelected ? 'selected' : ''}`}
                d={path}
            />
            <path className="vent-mode-text"
                  d={textPath}
            />
        </g>
    );
};

VentMode.propTypes = {
    path: PropTypes.string.isRequired,
    textPath: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default VentMode;

