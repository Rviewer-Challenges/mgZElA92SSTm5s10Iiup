import React, { useState } from 'react';

import AppUI from './ui/AppUI';

function App() {
  const [inputValue, setInputValue] = useState('');

  return <AppUI inputValue={inputValue} setInputValue={setInputValue} />;
}

export default App;
