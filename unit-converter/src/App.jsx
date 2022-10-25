import React, { useState, useEffect } from 'react';
import { tempOptions, lengthOptions } from './utils/selectOptionsHelper';
import { temperatureConversion } from './utils/temperatureHelpers';
import { lengthConversion } from './utils/lengthHelper';

import AppUI from './ui/AppUI';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('');
  const [outputUnit, setOutputUnit] = useState('');
  const [selectOptions, setSelectOptions] = useState(tempOptions);
  const [measure, setMeasure] = useState('temperature');

  const handleClickTempButton = () => {
    setMeasure('temperature');
    setInputValue('');
    setOutputValue('');
  };
  const handleClickLengthButton = () => {
    setMeasure('length');
    setInputValue('');
    setOutputValue('');
  };

  const handleClickUnitSwitch = () => {
    const newInputUnit = outputUnit;
    const newOutputUnit = inputUnit;

    setInputUnit(newInputUnit);
    setOutputUnit(newOutputUnit);

    setInputValue('');
    setOutputValue('');
  };

  const handleInputChange = (e) => {
    if (e.target.value < 0 && measure === 'length') return;

    if (e.target.value < 0 && inputUnit === 'kelvin') return;
    if (e.target.value < -273.15 && inputUnit === 'celsius') return;
    if (e.target.value < -459.67 && inputUnit === 'fahrenheit') return;

    setInputValue(e.target.value);
  };

  useEffect(() => {
    setInputValue('');
    setOutputValue('');
    if (measure === 'temperature') {
      setSelectOptions(tempOptions);
      setInputUnit(tempOptions[0].value);
      setOutputUnit(tempOptions[1].value);
    } else {
      setSelectOptions(lengthOptions);
      setInputUnit(lengthOptions[0].value);
      setOutputUnit(lengthOptions[1].value);
    }
  }, [measure]);

  useEffect(() => {
    if (measure === 'temperature' && inputValue) {
      setOutputValue(
        temperatureConversion(outputUnit, inputValue, inputUnit).toString()
      );
    } else if (measure === 'length' && inputValue) {
      setOutputValue(
        lengthConversion(outputUnit, inputValue, inputUnit).toString()
      );
    }
  }, [inputValue, inputUnit, outputUnit, measure]);

  return (
    <AppUI
      inputUnit={inputUnit}
      setInputUnit={setInputUnit}
      inputValue={inputValue}
      setInputValue={setInputValue}
      outputValue={outputValue}
      setOutputValue={setOutputValue}
      outputUnit={outputUnit}
      setOutputUnit={setOutputUnit}
      handleClickUnitSwitch={handleClickUnitSwitch}
      handleInputChange={handleInputChange}
      handleClickLengthButton={handleClickLengthButton}
      handleClickTempButton={handleClickTempButton}
      selectOptions={selectOptions}
      measure={measure}
    />
  );
}

export default App;
