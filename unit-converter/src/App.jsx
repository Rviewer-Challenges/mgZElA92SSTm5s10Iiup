import React, { useState, useEffect } from 'react';
import tempOptions from './utils/selectOptionsHelper';
import { temperatureConversion } from './utils/temperatureHelpers';

import AppUI from './ui/AppUI';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [inputUnit, setInputUnit] = useState(tempOptions[0].value);
  const [outputUnit, setOutputUnit] = useState(tempOptions[1].value);
  // eslint-disable-next-line no-unused-vars
  const [measure, setMeasure] = useState('temperature');

  const handleClickSwitch = () => {
    const newInputUnit = outputUnit;
    const newOutputUnit = inputUnit;

    setInputUnit(newInputUnit);
    setOutputUnit(newOutputUnit);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    // if (measure === 'temperature') {
    //   if (outputUnit === 'celsius') {
    //     setOutputValue(toCelsius(inputValue, inputUnit));
    //   } else if (outputUnit === 'fahrenheit') {
    //     setOutputValue(toFahrenheit(inputValue, inputUnit));
    //   } else {
    //     console.log(inputValue, inputUnit);
    //     setOutputValue(toKelvin(inputValue, inputUnit));
    //   }
    // }
  };
  useEffect(() => {
    if (measure === 'temperature') {
      if (inputValue) {
        setOutputValue(
          temperatureConversion(outputUnit, inputValue, inputUnit)
        );
      }
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
      handleClickSwitch={handleClickSwitch}
      handleInputChange={handleInputChange}
    />
  );
}

export default App;
