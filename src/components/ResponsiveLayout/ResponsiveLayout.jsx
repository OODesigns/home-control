import React from 'react';
import PropTypes from 'prop-types';

const ResponsiveLayout = ({ children}) => {
  const items = React.Children.toArray(children);
  const isOdd = items.length % 2 !== 0;

  return (
      <div className={`ResponsiveLayout ${isOdd ? 'oddItem' : ''}`}>
        {items.map((item, index) => (
            <div key={index} className={`ResponsiveItem ${isOdd && index === items.length -1 ? 'oddItem' : ''}`}>
              {item}
            </div>
        ))}
      </div>
  );
};

ResponsiveLayout.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.string,
  minColumnWidth: PropTypes.string
};

export default ResponsiveLayout;