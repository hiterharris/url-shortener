import React from 'react';
import useBitly from './hooks/useBitly';
import { Input, Result } from './components';
import { isDesktop } from 'react-device-detect';
import './App.css';

const App = () => {
  const { input, setInput, getUrl, response, handleCopy, animation } = useBitly();

  return (
    <div className={`App ${isDesktop ? 'desktop' : 'mobile'}`}>
      <Input
        input={input}
        setInput={setInput}
        getUrl={getUrl}
        isDesktop={isDesktop}
      />
      <Result
        response={response}
        handleCopy={handleCopy}
        animation={animation}
      />
    </div>
  );
}

export default App;
