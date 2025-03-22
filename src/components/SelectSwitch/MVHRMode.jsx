import VentMode from "./VentMode";
import React from "react";
import PropTypes from "prop-types";

// Define path strings as constants
const OUTER_PATH = `
  M 28.75644347017858 220 
  A 140 140 0 0 1 149.99999999999997 10 
  L 149.99999999999997 70 
  A 80 80 0 0 0 80.7179676972449 190 
  Z
`;

// Break the text path into logical segments based on movements
const TEXT_PATH = `
  m57.87 154.45-31.473 12.776.006.203q1.57-.194 4.259-.367 2.638-.171 5.532-.248l21.989-.583.112 4.215-36.259.96-.179-6.753
  29.412-11.96-.006-.202-30.008-10.589-.178-6.703 36.259-.96.12 4.52-22.294.59q-2.64.07-5.233.037-2.594-.084-4.222-.142
  l.005.203 32.06 11.245z
  M37.688 86.706l28.194 26.24-1.808 4.2-38.437-2.444 1.888-4.386 24.604 1.687q2.374.137 4.415.407 1.994.25 3.768.627
  -1.493-1.03-3.091-2.327-1.6-1.296-3.378-2.947L35.78 91.138Z
  m56.105-9.46-3.23 3.236-11.973-11.95-13.134 13.16 11.973 11.95-3.23 3.236-25.673-25.621 3.23-3.237 10.859 10.838
  13.134-13.16-10.86-10.838 3.23-3.236Z
  m3.365-42.486q6.193-2.702 10.162-1.607 3.996 1.028 6.068 5.777 1.158 2.654.952 4.85-.206 2.196-1.275 3.937
  -1.043 1.675-2.455 3.011l15.627 10.918-4.89 2.133L107.3 53.56l-6.612 2.884 5.993 13.735-4.19 1.829-14.505-33.245z
  m1.352 3.733-4.75 2.072 5.384 12.34 4.982-2.174q4.05-1.768 5.223-4.164 1.151-2.442-.21-5.561-1.422-3.26-3.967-3.757
  -2.565-.543-6.662 1.244z
`;

// Helper function to normalize path strings (removes newlines and extra spaces)
const normalizePath = (pathString) => {
  return pathString.replace(/\s+/g, ' ').trim();
};

const MVHRMode = ({isSelected, onSelect}) => {
    return (<VentMode
        path={normalizePath(OUTER_PATH)}
        textPath={normalizePath(TEXT_PATH)}
        id="mvhr"
        isSelected={isSelected}
        onSelect={onSelect}
    />);
}

MVHRMode.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default MVHRMode;
