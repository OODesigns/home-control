import React from "react";
import VentMode from "./VentMode";
import PropTypes from "prop-types";

// Define path strings as constants
const OUTER_PATH = `
  M 271.24355652982143 220 
  A 140 140 0 0 1 28.75644347017858 220 
  L 80.7179676972449 190 
  A 80 80 0 0 0 219.2820323027551 190 
  Z
`;

// Break the text path into logical segments
const TEXT_PATH = `
  m91.013 263.246 2.214-11.842-12.21-7.587-9.594 7.256-3.926-2.44 31.262-23.456 3.495 2.171-7.229 38.391z
  m5.534-27.482q.085-.426.346-1.52.26-1.094.549-2.23.357-1.154.507-1.779-1.134 1.15-2.326 2.203-1.166 1.01-1.88 1.583
  l-9.287 7.148 9.751 6.06z
  m45.729 28.738q-.681 3.697-2.732 6.418-2.042 2.672-5.462 3.85-3.36 1.137-8.106.263-6.645-1.224-9.48-5.466
  -2.775-4.282-1.68-10.227l4.233-22.981 4.497.828-4.261 23.131q-.8 4.347 1.056 7.168 1.906 2.83 6.602 3.696
  q4.846.893 7.464-1.26 2.677-2.193 3.422-6.24l4.252-23.08 4.446.818z
  m31.135 10.156-4.515.719-5.07-31.857-11.188 1.78-.63-3.963 26.84-4.272.63 3.963-11.137 1.773z
  m46.542-38.97q2.788 4.9 3.194 9.52.426 4.55-1.643 8.415-2.068 3.865-6.837 6.577-4.902 2.787-9.325 2.614
  -4.379-.198-8.053-2.959-3.674-2.76-6.461-7.662-2.763-4.858-3.232-9.383-.47-4.525 1.598-8.39 2.113-3.89 7.059-6.702
  q4.725-2.687 9.103-2.489 4.354.154 8.072 2.89 3.738 2.667 6.525 7.568z
  m-24.905 14.163q3.39 5.961 7.866 7.974 4.45 1.97 9.794-1.07 5.387-3.063 5.926-7.87.514-4.85-2.876-10.812
  -3.39-5.961-7.772-7.911-4.406-1.994-9.75 1.045-5.343 3.038-5.97 7.895-.608 4.788 2.782 10.75z
`;

// Helper function to normalize path strings (removes newlines and extra spaces)
const normalizePath = (pathString) => {
  return pathString.replace(/\s+/g, ' ').trim();
};

const AutoMode = ({isSelected, onSelect}) => {
  return (
    <VentMode
      path={normalizePath(OUTER_PATH)}
      textPath={normalizePath(TEXT_PATH)}
      id="auto"
      isSelected={isSelected}
      onSelect={onSelect}
    />
  );
};

AutoMode.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default AutoMode;

