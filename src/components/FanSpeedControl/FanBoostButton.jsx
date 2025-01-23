import PropTypes from "prop-types";

export default function FanBoostButton({ boostActive, toggleBoost, fanGroupRef }) {
    return (
        <button
            ref={fanGroupRef}
            className={`fan-container ${boostActive ? 'rotate' : ''}`}
            onClick={toggleBoost}
            aria-label="Toggle Boost"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 300">
                <rect width="120" height="300" className="background" />
                <g>
                    <path id="boostCircle" d="M 0,-28 A 28 28 0 1 1 0,28 A 28 28 0 1 1 0,-28" fill="none" />
                    <text className={`boost-text ${boostActive ? 'rotate' : ''}`}>
                        <textPath href="#boostCircle" startOffset="0%">
                            BOOST • BOOST • BOOST • BOOST •
                        </textPath>
                    </text>
                    <g transform="translate(-24, -24) scale(2)">
                        <path d="..." fill="white" />
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
