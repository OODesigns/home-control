import PropTypes from "prop-types";

const FadingContainer = ({ children }) => (
    <div className="container-wrapper">
        <div className="fade-container"></div>
        {children}
    </div>
);

FadingContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FadingContainer;