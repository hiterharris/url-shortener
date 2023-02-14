import React, { useState } from 'react';
import useBitly from './hooks/useBitly';
import { Input, Result } from './components';
import { isDesktop } from 'react-device-detect';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const { getUrl, shortUrl, setShortUrl } = useBitly();

  console.log('isDesktop: ', isDesktop)

  return (
    <div className={`App ${isDesktop ? 'desktop' : 'mobile'}`}>
      {!shortUrl ?
      <Input
        input={input}
        setInput={setInput}
        getUrl={getUrl}
        isDesktop={isDesktop}
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
