import React from "react";
import PropTypes from "prop-types";
import "./VentMode.scss"

const VentMode = ({path, textPath,  text, dominantBaseline, isSelected, onSelect,
                      }) => {
    const handleClick = () => {
        onSelect(text);
    };

    // Create a unique textPathId based on the text prop
    const textPathId = `vent-mode-text-id-${text.toLowerCase()}`;

    return (
        <g className="vent-mode">
            <path
                className="vent-mode-path"
                d={path}
                style={{
                    fill: isSelected ? '#1E3A61' : 'transparent',
                    strokeWidth: isSelected ? 3 : 2,
                }}
            />
            <path id={textPathId} style={{ fill: 'none'}} d={textPath} />
            <text className="vent-mode-text">
                <textPath
                    xlinkHref={`#${textPathId}`}
                    startOffset="50%"
                    textAnchor="middle"
                    dominantBaseline={dominantBaseline || undefined}
                >
                    {text}
                </textPath>
            </text>
        </g>
    );
};

VentMode.propTypes = {
    path: PropTypes.string.isRequired,
    textPath: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    dominantBaseline: PropTypes.string,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default VentMode;

