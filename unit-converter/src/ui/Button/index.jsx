import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ children, customClasses, onClickFunc, measure }) {
  let focusClass = null;
  if (
    onClickFunc.name === 'handleClickTempButton' &&
    measure === 'temperature'
  ) {
    focusClass = 'button--measure-type-focus';
  } else if (
    onClickFunc.name === 'handleClickLengthButton' &&
    measure === 'length'
  ) {
    focusClass = 'button--measure-type-focus';
  }
  return (
    <button
      onClick={onClickFunc}
      type="button"
      className={
        focusClass ? `${customClasses}  ${focusClass}` : `${customClasses}`
      }
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: null,
  customClasses: null,
  onClickFunc: null,

  measure: null,
};
Button.propTypes = {
  children: PropTypes.node,
  customClasses: PropTypes.string,
  onClickFunc: PropTypes.func,

  measure: PropTypes.string,
};

export default Button;
