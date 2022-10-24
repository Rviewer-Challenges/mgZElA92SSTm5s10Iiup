import React, { useState } from 'react';
import tempOptions from './utils/selectOptionsHelper';

import AppUI from './ui/AppUI';

function App() {
  const [inputValue, setInputValue] = useState('');
  // const [outputValue, setOutputValue] = useState('');
  const [inputUnit, setInputUnit] = useState(tempOptions[0].value);
  const [outputUnit, setOutputUnit] = useState(tempOptions[1].value);

  return (
    <AppUI
      inputUnit={inputUnit}
      setInputUnit={setInputUnit}
      inputValue={inputValue}
      setInputValue={setInputValue}
      outputUnit={outputUnit}
      setOutputUnit={setOutputUnit}
    />
  );
}

export default App;
