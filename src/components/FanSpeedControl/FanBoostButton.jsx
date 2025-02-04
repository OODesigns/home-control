import PropTypes from "prop-types";
import "./FanBoostButton.css"; // Assuming a CSS file for styles

export default function FanBoostButton({ boostActive, toggleBoost, fanGroupRef }) {
    return (
        <button
            ref={fanGroupRef}
            className={`fan-container ${boostActive ? 'rotate' : ''}`}
            onClick={toggleBoost}
            aria-label="Toggle Boost"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 300">
                <rect width="120" height="300" fill="transparent" />

                {/* Fan Group with rotation */}
                <g id="fanGroup" className={boostActive ? 'rotate' : ''}>
                    <path id="boostCircle" d="M 0,-28 A 28 28 0 1 1 0,28 A 28 28 0 1 1 0,-28" fill="none" stroke="none" />
                    <text className="boost-text">
                        <textPath href="#boostCircle" startOffset="0%">
                            BOOST • BOOST • BOOST • BOOST •
                        </textPath>
                    </text>
                    <g transform="translate(-24, -24) scale(2)">
                        <path
                            d="M12,11a1,1,0,1,0,1,1,1,1,0,0,0-1-1m.5-9C17,2,17.1,5.57,14.73,6.75a3.36,3.36,0,0,0-1.62,2.47,3.17,3.17,0,0,1,1.23.91C18,8.13,22,8.92,22,12.5c0,4.5-3.58,4.6-4.75,2.23a3.44,3.44,0,0,0-2.5-1.62,3.24,3.24,0,0,1-.91,1.23c2,3.69,1.2,7.66-2.38,7.66C7,22,6.89,18.42,9.26,17.24a3.46,3.46,0,0,0,1.62-2.45,3,3,0,0,1-1.25-.92C5.94,15.85,2,15.07,2,11.5,2,7,5.54,6.89,6.72,9.26A3.39,3.39,0,0,0,9.2,10.87a2.91,2.91,0,0,1,.92-1.22C8.13,6,8.92,2,12.48,2Z"
                            fill="white"
                        />
                    </g>
                </g>
            </svg>
        </button>
    );
}

FanBoostButton.propTypes = {
    boostActive: PropTypes.bool.isRequired,
    toggleBoost: PropTypes.func.isRequired,
    fanGroupRef: PropTypes.object.isRequired,
};
