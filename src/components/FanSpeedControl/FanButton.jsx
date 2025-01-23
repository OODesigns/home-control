import PropTypes from "prop-types";

export default function FanButton({ caption, onClick }) {
    return (
        <button onClick={onClick} aria-label={caption}>
            {caption}
        </button>
    );
}

FanButton.propTypes = {
    caption: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
