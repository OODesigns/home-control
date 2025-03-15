import React from "react";
import "./VentMode.scss"

const VentMode = ({
                          pathD,
                          textPathD,
                          text,
                          dominantBaseline,
                          isSelected,
                          onSelect,
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
                d={pathD}
                style={{
                    fill: isSelected ? '#1E3A61' : 'transparent',
                    strokeWidth: isSelected ? 3 : 2,
                }}
            />
            <path id={textPathId} style={{ fill: 'none'}} d={textPathD} />
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

export default VentMode;