import "./HorizontalContainer.scss";
import PropTypes from "prop-types";

const HorizontalLayout = ({ children, ...props }) => {
    return (
        <div className="horizontal-layout" {...props}>
                {children}
        </div>
    );
};

HorizontalLayout.propTypes = {
    // 'children' is any valid React node (e.g., JSX, strings, etc.)
    children: PropTypes.node,
};


export default HorizontalLayout;
