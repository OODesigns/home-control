import React from "react";
import PropTypes from "prop-types";

const BaseIcon   = React.memo(({ value, children, ...props }) => {
    return (
        <div className="icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60.601 60.601"
                {...props}
            >
                <path
                    className="blue-stroke"
                    strokeWidth={0.60625005}
                    d="M7.779 56.04a3.218 3.218 0 0 1-3.218-3.218V7.779A3.218 3.218 0 0 1 7.78 4.562h45.043a3.218 3.218 0 0 1 3.218 3.217v45.043a3.218 3.218 0 0 1-3.218 3.217H7.78z"
                />
                <path
                    className="blue-stroke"
                    strokeWidth={0.233211}
                    d="M32.742 27.582a1.238 1.238 0 0 1-1.238-1.237V9.018c0-.684.555-1.238 1.238-1.238H50.07c.684 0 1.238.554 1.238 1.238v17.327c0 .683-.554 1.237-1.238 1.237z"
                    transform="matrix(1.06642 0 0 1.06642 -1.737 -1.697)"
                />
                <path
                    className="blue-stroke"
                    strokeWidth={0.247887}
                    d="M8.112 28.572a1.316 1.316 0 0 1-1.316-1.315V8.84c0-.727.59-1.316 1.316-1.316H26.53c.726 0 1.315.589 1.315 1.316v18.417c0 .727-.59 1.315-1.315 1.315z"
                    transform="translate(.898 -.849)"
                />
                {children}
                <text
                    x={42.5}
                    y={20.5}
                    fontSize="10.5px"
                    strokeWidth={0.21069}
                    fill="#ffffff"
                    textAnchor="middle"
                >
                    {value}
                </text>
            </svg>
        </div>
    );
});

BaseIcon.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default BaseIcon;
