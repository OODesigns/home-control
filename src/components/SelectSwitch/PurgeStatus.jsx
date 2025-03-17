import React from "react";

const Purge = () => {
    return (
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Blue Arrow for Fresh Air Intake */}
            <path d="M50,100 Q75,50 125,50 L115,40 M125,50 L115,60"
                  stroke="blue" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

            {/* Red Arrow for Stale Air Exhaust */}
            <path d="M150,100 Q125,150 75,150 L85,160 M75,150 L85,140"
                  stroke="red" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

            {/* Ventilation Grille */}
            <rect x="90" y="85" width="20" height="30" fill="gray"/>
        </svg>
    );
};

export default Purge;