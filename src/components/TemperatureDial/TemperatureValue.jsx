import React from "react";
import PropTypes from "prop-types";

const TemperatureValue = ({text, position, fontSize}) => (
    <div className="temperature-value" style={{top: position, fontSize:`${fontSize}vmin`}}>
        {text}
    </div>
);

TemperatureValue.propTypes = {
    text: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
}

export default TemperatureValue;