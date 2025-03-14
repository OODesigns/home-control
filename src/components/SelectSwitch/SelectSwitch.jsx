import React, { useState } from 'react';
import './SelectSwitch.scss'

// RegionButton component encapsulates a region that uses a native input button for interaction.
const RegionButton = ({
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

const SelectSwitch = ({ onRegionChange }) => {
    const [activeRegion, setActiveRegion] = useState("auto");

    const handleActivateRegion = (regionId) => {
        setActiveRegion(regionId);
        if (onRegionChange) {
            onRegionChange(regionId);
        }
        console.log('Activated region:', regionId);
    };

    return (
        <div className="svg-container">
            <svg
                width="300mm"
                height="300mm"
                viewBox="0 0 300 300"
                id="svg1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g id="layer1">
                    {/* AUTO Region */}
                    <RegionButton
                        id="auto"
                        label="Auto"
                        pathD="M 271.24355652982143 220 A 140 140 0 0 1 28.75644347017858 220 L 80.7179676972449 190 A 80 80 0 0 0 219.2820323027551 190 Z"
                        textPathId="textPath8"
                        textPathD="m 70.591028,195.84679 c 16.055575,26.50519 45.608592,44.27802 79.408902,44.27802 33.80043,0 63.35347,-17.77283 79.40906,-44.27801"
                        text="AUTO"
                        textPathDY="4"
                        isActive={activeRegion === 'auto'}
                        onActivate={handleActivateRegion}
                        // Example button position and size; adjust as needed.
                        buttonX="70"
                        buttonY="180"
                        buttonWidth="80"
                        buttonHeight="40"
                    />
                    {/* PURGE Region */}
                    <RegionButton
                        id="purge"
                        label="Purge"
                        pathD="M 150 10 A 140 140 0 0 1 271.24355652982143 220 L 219.2820323027551 190 A 80 80 0 0 0 150 70 Z"
                        textPathId="textPath6"
                        textPathD="m 149.99993,59.875204 c 50.92929,0 92.21558,40.350216 92.21558,90.124796 0,18.27265 -4.45077,33.71771 -11.9695,46.33006"
                        text="PURGE"
                        isActive={activeRegion === 'purge'}
                        onActivate={handleActivateRegion}
                        buttonX="160"
                        buttonY="50"
                        buttonWidth="80"
                        buttonHeight="40"
                    />
                    {/* MVHR Region */}
                    <RegionButton
                        id="mvhr"
                        label="MVHR"
                        pathD="M 28.75644347017858 220 A 140 140 0 0 1 149.99999999999997 10 L 149.99999999999997 70 A 80 80 0 0 0 80.7179676972449 190 Z"
                        textPathId="textPath4"
                        textPathD="M 70.591028,195.84679 C 62.454632,182.4149 57.784517,166.74046 57.784517,150 c 0,-49.77458 41.286299,-90.124796 92.215413,-90.124796"
                        text="MVHR"
                        isActive={activeRegion === 'mvhr'}
                        onActivate={handleActivateRegion}
                        buttonX="60"
                        buttonY="150"
                        buttonWidth="80"
                        buttonHeight="40"
                    />
                </g>
            </svg>
        </div>
    );
};

export default SelectSwitch;
