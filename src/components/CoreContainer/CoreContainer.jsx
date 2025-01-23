import "./CoreContainer.css";
import PropTypes from "prop-types";

export default function CoreContainer ({ children }) {
    return (
        <div className="core-container">
            {children}
        </div>
    );
};

CoreContainer.propTypes = {
    // 'children' is any valid React node (e.g., JSX, strings, etc.)
    children: PropTypes.node,
};