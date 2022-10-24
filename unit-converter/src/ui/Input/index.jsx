import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input({ type, customClasses }) {
  return <input type={type} className={`nes-input is-dark ${customClasses}`} />;
}

Input.defaultProps = {
  type: PropTypes.string,
  customClasses: null,
};
Input.propTypes = {
  type: PropTypes.string,
  customClasses: PropTypes.string,
};

export default Input;
