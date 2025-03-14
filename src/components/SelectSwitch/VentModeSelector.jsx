import React, { useState } from 'react';
import './VentModeSelector.scss'
import AutoMode from "./AutoMode";
import PurgeMode from "./PurgeMode";
import MVHRMode from "./MVHRMode";

const VentModeSelector = ({ onRegionChange }) => {
    const [activeMode, setActiveMode] = useState("auto");

    const OnActivateMode = (regionId) => {
        setActiveMode(regionId);
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
                <AutoMode
                    isActive={activeMode === 'auto'}
                    onActivate={OnActivateMode}
                />
                <PurgeMode
                    isActive={activeMode === 'purge'}
                    onActivate={OnActivateMode}
                />
                <MVHRMode
                    isActive={activeMode === 'MVHR'}
                    onActivate={OnActivateMode}
                />
            </svg>
        </div>
    );
};

export default VentModeSelector;
