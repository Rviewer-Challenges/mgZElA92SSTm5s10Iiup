import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ children, customClasses }) {
  return (
    <button type="button" className={customClasses}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: null,
  customClasses: null,
};
Button.propTypes = {
  children: PropTypes.node,
  customClasses: PropTypes.string,
};

export default Button;
