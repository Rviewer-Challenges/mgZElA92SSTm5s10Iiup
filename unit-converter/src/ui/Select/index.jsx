import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

function Select({ options }) {
  return (
    <div className="nes-select">
      <select className="custom-select" id="default_select">
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Select;
