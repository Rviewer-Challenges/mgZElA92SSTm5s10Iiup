import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input({ type, customClasses, inputValue, handlerOnChange, disabled }) {
  if (!disabled) {
    return (
      <input
        type={type}
        value={inputValue}
        onChange={(e) => handlerOnChange(e)}
        className={`nes-input is-dark ${customClasses}`}
      />
    );
  }
  return (
    <input
      type={type}
      value={inputValue}
      onChange={(e) => handlerOnChange(e)}
      className={`nes-input is-dark ${customClasses}`}
      disabled
    />
  );
}

Input.defaultProps = {
  type: PropTypes.string,
  customClasses: null,
  disabled: null,
};
Input.propTypes = {
  type: PropTypes.string,
  customClasses: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
  handlerOnChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Input;
