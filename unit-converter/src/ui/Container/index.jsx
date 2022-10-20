import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

function Container({ children, customClasses }) {
  return (
    <div
      className={
        customClasses ? `${customClasses} nes-container` : `nes-container`
      }
    >
      {children}
    </div>
  );
}
Container.defaultProps = {
  children: null,
  customClasses: null,
};
Container.propTypes = {
  children: PropTypes.node,
  customClasses: PropTypes.string,
};

export default Container;
