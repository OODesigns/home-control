import VentMode from "./VentMode";
import React from "react";

const MVHRMode = ({isActive, onActivate}) => {
    return (<VentMode
        id="mvhr"
        label="MVHR"
        pathD="M 28.75644347017858 220 A 140 140 0 0 1 149.99999999999997 10 L 149.99999999999997 70 A 80 80 0 0 0 80.7179676972449 190 Z"
        textPathId="textPath4"
        textPathD="M 70.591028,195.84679 C 62.454632,182.4149 57.784517,166.74046 57.784517,150 c 0,-49.77458 41.286299,-90.124796 92.215413,-90.124796"
        text="MVHR"
        isActive={isActive}
        onActivate={onActivate}
        buttonX="60"
        buttonY="150"
        buttonWidth="80"
        buttonHeight="40"
    />);
}

export default MVHRMode;