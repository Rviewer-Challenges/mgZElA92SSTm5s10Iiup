import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ children, customClasses, onClickFunc }) {
  return (
    <button onClick={onClickFunc} type="button" className={customClasses}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: null,
  customClasses: null,
  onClickFunc: null,
};
Button.propTypes = {
  children: PropTypes.node,
  customClasses: PropTypes.string,
  onClickFunc: PropTypes.func,
};

export default Button;
