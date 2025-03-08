import PropTypes from "prop-types";
import "./SmallSvgButton.scss";
import * as propTypes from "prop-types";

export default function SmallSvgButton({ pathId, ariaLabel, onClick, path, ...props}) {
    return (
        <button {...props} onClick={onClick} aria-label={ariaLabel} className="SmallSvgButton">
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block", height: "8vmin", width: "8vmin", margin: "auto" }}
                preserveAspectRatio="xMidYMid meet"
            >
                <path id={pathId} d={path} fill="none" stroke="white" strokeWidth="2" />
            </svg>
        </button>
    );
}

SmallSvgButton.propTypes = {
    pathId: propTypes.string,
    ariaLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    // Now you pass the SVG path directly as a string, making it more reusable.
    path: PropTypes.string.isRequired,
};