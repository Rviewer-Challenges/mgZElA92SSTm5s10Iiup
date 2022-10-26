import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

function Select({ options, onChangeFunc, unit }) {
  return (
    <div className="nes-select">
      <select
        className="custom-select"
        id="default_select"
        value={unit}
        onChange={(e) => onChangeFunc(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onChangeFunc: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
};

export default Select;
