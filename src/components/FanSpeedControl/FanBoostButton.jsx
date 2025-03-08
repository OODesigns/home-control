
import PropTypes from 'prop-types';
import './FanBoostButton.scss'; // Import your styles here

const FanBoostButton = ({ boostActive, toggleBoost, fanGroupRef }) => {
    return (
        <button
            ref={fanGroupRef}
            onClick={toggleBoost}
            className="fan-container"
            aria-label="Toggle Boost"
            style={{ background: 'none', border: 'none', padding: 0 }}
        >
            <svg
                viewBox="-2 -2 36 36"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block', width: '14vmin', margin: 'auto' }}
                preserveAspectRatio="xMidYMid meet"
            >
                <g id="fan_group">
                    <path
                        d="M16,15a1,1,0,1,0,1,1,1,1,0,0,0-1-1m.5-9C21,6,21.1,9.57,18.73,10.75a3.36,3.36,0,0,0-1.62,2.47a3.17,3.17,0,0,1,1.23.91C22,12.13,26,12.92,26,16.5c0,4.5-3.58,4.6-4.75,2.23a3.44,3.44,0,0,0-2.5-1.62a3.24,3.24,0,0,1-.91,1.23c2,3.69,1.2,7.66-2.38,7.66C11,26,10.89,22.42,13.26,21.24a3.46,3.46,0,0,0,1.62-2.45a3,3,0,0,1-1.25-.92C9.94,19.85,6,19.07,6,15.5C6,11,9.54,10.89,10.72,13.26A3.39,3.39,0,0,0,13.2,14.87a2.91,2.91,0,0,1,.92-1.22C12.13,10,12.92,6,16.48,6Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                    />
                    <path
                        id="boostCircle"
                        d="M16,2 A14,14 0 1,1 16,30 A14,14 0 1,1 16,2 Z"
                        fill="none"
                        stroke="none"
                        strokeWidth="1"
                    />
                    <text className={`boost-text ${boostActive ? 'rotate' : ''}`}>
                        <textPath href="#boostCircle" startOffset="0%">
                            BOOST • BOOST • BOOST • BOOST •
                        </textPath>
                    </text>
                    <rect
                        x="-2"
                        y="-2"
                        width="36"
                        height="36"
                        fill="transparent"
                        pointerEvents="all"
                    />
                </g>
            </svg>
        </button>
    );
};

FanBoostButton.propTypes = {
    boostActive: PropTypes.bool.isRequired,
    toggleBoost: PropTypes.func.isRequired,
    fanGroupRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

export default FanBoostButton;
