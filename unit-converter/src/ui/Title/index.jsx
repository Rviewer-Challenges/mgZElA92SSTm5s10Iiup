import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

function Title({ customClasses, text }) {
  return (
    <p className={customClasses ? `${customClasses} title` : 'title'}>{text}</p>
  );
}

Title.defaultProps = {
  customClasses: null,
};
Title.propTypes = {
  text: PropTypes.string.isRequired,
  customClasses: PropTypes.string,
};

export default Title;
