import React from 'react';
import PropTypes from 'prop-types';

function FadingContainer({ show, children }) {
    return (
        <div className={`fading-container ${show ? 'open' : 'closed'}`}>
            {children}
        </div>
    );
}

FadingContainer.propTypes = {
    /** Controls whether the container is visible (fades in) or hidden (fades out and collapses). */
    show: PropTypes.bool.isRequired,
    /** Elements (or React components) inside the container */
    children: PropTypes.node,
};

FadingContainer.defaultProps = {
    children: null,
};

export default FadingContainer;
