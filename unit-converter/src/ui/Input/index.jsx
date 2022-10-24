import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input({ type, customClasses, inputValue }) {
  return (
    <input
      type={type}
      value={inputValue}
      className={`nes-input is-dark ${customClasses}`}
    />
  );
}

Input.defaultProps = {
  type: PropTypes.string,
  customClasses: null,
  inputValue: PropTypes.string,
};
Input.propTypes = {
  type: PropTypes.string,
  customClasses: PropTypes.string,
  inputValue: PropTypes.string,
};

export default Input;
