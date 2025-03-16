import PropTypes from "prop-types";
import SmallSvgButton from "../SmallSvgButton/SmallSvgButton.jsx";

export default function FanButton({ ariaLabel, onClick, path }) {
    return (
       <SmallSvgButton
           id="fan-button"
           onClick={onClick}
           ariaLabel={ariaLabel}
           path={path}
           pathId="fan-button-arrow"/>
    );
}

FanButton.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    // Now you pass the SVG path directly as a string, making it more reusable.
    path: PropTypes.string.isRequired,
};
