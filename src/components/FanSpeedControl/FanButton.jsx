// FanButton.jsx
import PropTypes from "prop-types";
import "./FanButton.css";

export default function FanButton({ ariaLabel, onClick, path }) {
    return (
        <button onClick={onClick} aria-label={ariaLabel} className="fan-button">
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block", height: "8vmin", width: "8vmin", margin: "auto" }}
                preserveAspectRatio="xMidYMid meet"
            >
                <path d={path} fill="none" stroke="white" strokeWidth="2" />
            </svg>
        </button>
    );
}

FanButton.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    // Now you pass the SVG path directly as a string, making it more reusable.
    path: PropTypes.string.isRequired,
};
