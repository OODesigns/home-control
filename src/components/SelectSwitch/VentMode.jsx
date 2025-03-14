import React from "react";
import "./VentMode.scss"

const VentMode = ({
                          id,
                          label,
                          pathD,
                          textPathId,
                          textPathD,
                          text,
                          textPathDY,
                          isActive,
                          onActivate,
                          // Coordinates and dimensions for the embedded button. Adjust these as needed.
                          buttonX,
                          buttonY,
                          buttonWidth,
                          buttonHeight,
                      }) => {
    const handleClick = () => {
        onActivate(id);
    };

    return (
        <g id={`${id}-region`}>
            <path
                className="region-path"
                d={pathD}
                style={{
                    fill: isActive ? '#c268f8' : 'transparent',
                    stroke: isActive ? '#c268f8' : 'white',
                    strokeWidth: isActive ? 2 : 1,
                    transition: 'all 0.3s ease',
                }}
            />
            <path id={textPathId} style={{ fill: 'none'}} d={textPathD} />
            <text className="region-text"
                  style={{ fontSize: '50.8px',
                      fill: isActive ? '#14253D': 'white',
                      fontWeight: 500,
                  }}>
                <textPath
                    xlinkHref={`#${textPathId}`}
                    startOffset="50%"
                    textAnchor="middle"
                    dominantBaseline="hanging"
                    dy={textPathDY || undefined}
                >
                    {text}
                </textPath>
            </text>
            {/*
        Embed a native HTML button within the SVG using foreignObject.
        Adjust the x, y, width, and height values to correctly overlay the region.
      */}
            <foreignObject x={buttonX} y={buttonY} width={buttonWidth} height={buttonHeight}>
                <input
                    type="button"
                    value=""
                    aria-label={`${label} mode`}
                    onClick={handleClick}
                    style={{
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                />
            </foreignObject>
        </g>
    );
};

export default VentMode;