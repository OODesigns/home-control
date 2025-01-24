import PropTypes from "prop-types";
import "./FanBoostButton.css";

export default function FanBoostButton({ boostActive, toggleBoost, fanGroupRef }) {
    return (
        <button
            ref={fanGroupRef}
            id="fan-button"
            className={`fan-container ${boostActive ? 'rotate' : ''}`}
            onClick={toggleBoost}
            aria-label="Toggle Boost"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="#1E3A8A" /> {/* Circular background */}
                <g id="fanGroup" className={boostActive ? 'rotate' : ''}>
                    <path
                        id="boostCircle"
                        d="M 60,10 A 50 50 0 1 1 59.9,10" /* Circle Path */
                        fill="none"
                        stroke="none"
                    />
                    <text className="boost-text">
                        <textPath href="#boostCircle" startOffset="0%">
                            BOOST • BOOST • BOOST • BOOST •
                        </textPath>
                    </text>
                    <g transform="translate(35, 35)">
                        <path
                            d="M12,11a1,1,0,1,0,1,1,1,1,0,0,0-1-1m.5-9C17,2,17.1,5.57,14.73,6.75..."
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
