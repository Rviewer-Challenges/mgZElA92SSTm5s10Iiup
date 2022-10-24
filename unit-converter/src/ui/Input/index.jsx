import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input({ type, customClasses, inputValue, setInputValue, disabled }) {
  if (!disabled) {
    return (
      <input
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`nes-input is-dark ${customClasses}`}
      />
    );
  }
  return (
    <input
      type={type}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
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
  setInputValue: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Input;
