import PropTypes from "prop-types"; // Import styles

const VerticalLayout = ({ children, ...props }) => {
    return (
        <div className="vertical-layout" {...props}>
                {children}
        </div>
    );
};


VerticalLayout.propTypes = {
    // 'children' is any valid React node (e.g., JSX, strings, etc.)
    children: PropTypes.node,
};

export default VerticalLayout;
