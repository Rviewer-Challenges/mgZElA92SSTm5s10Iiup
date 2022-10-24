import React, { useState } from 'react';
import tempOptions from './utils/selectOptionsHelper';

import AppUI from './ui/AppUI';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [inputUnit, setInputUnit] = useState(tempOptions[0].value);
  const [outputUnit, setOutputUnit] = useState(tempOptions[1].value);
  // const [measure, setMeasure] = useState('temperature');

  const handleClickSwitch = () => {
    const newInputUnit = outputUnit;
    const newOutputUnit = inputUnit;

    setInputUnit(newInputUnit);
    setOutputUnit(newOutputUnit);
  };

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
    />
  );
}

export default App;
