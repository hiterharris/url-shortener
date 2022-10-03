import React, { useState } from 'react';
import useBitly from './hooks/useBitly';
import { Input, Result } from './components';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const { getUrl, shortUrl, setShortUrl } = useBitly();

  return (
    <div className="App">
      {!shortUrl ?
      <Input
        input={input}
        setInput={setInput}
        getUrl={getUrl}
      /> :
      <Result
        input={input}
        setInput={setInput}
        shortUrl={shortUrl}
        setShortUrl={setShortUrl}
      />}
    </div>
  );
}

export default App;
