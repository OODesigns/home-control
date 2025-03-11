import PropTypes from "prop-types";
import "./PowerControl.scss"

const PowerControl = ({status, onClick}) => {
    // Inline style to control the button's dimensions based on the 'size' prop.

    return (
        <button
            type="button"
            className="power-control"
            // className={`svg-button ${status} ${className}`.trim()}
            onClick={onClick}
            // style={buttonStyle}
            // aria-label={ariaLabel}
        >
            <svg
                viewBox="0 1.357 32.950 29.790"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
            >
                <path
                    d="M20.034,2.357v3.824c3.482,1.798,5.869,5.427,5.869,9.619c0,5.98-4.848,10.83-10.828,10.83c-5.982,0-10.832-4.85-10.832-10.83
              c0-3.844,2.012-7.215,5.029-9.136V2.689C4.245,4.918,0.731,9.945,0.731,15.801c0,7.921,6.42,14.342,14.34,14.342
              c7.924,0,14.342-6.421,14.342-14.342C29.412,9.624,25.501,4.379,20.034,2.357z"
                    fill="white"
                    stroke="none"
                    strokeWidth="1"
                ></path>
                <path
                    d="M14.795,17.652c1.576,0,1.736-0.931,1.736-2.076V2.08c0-1.148-0.16-2.08-1.736-2.08c-1.57,0-1.732,0.932-1.732,2.08v13.496
              C13.062,16.722,13.225,17.652,14.795,17.652z"
                    fill="white"
                    stroke="none"
                    strokeWidth="1"
                ></path>
            </svg>
        </button>
    );
};

PowerControl.propTypes = {
    status: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default PowerControl;