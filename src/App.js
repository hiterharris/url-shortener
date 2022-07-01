import React, { useState } from 'react';
import useBitly from './hooks/useBitly';
import clear from './assets/clear.png';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [animation, setAnimation] = useState(false);
  const { getUrl, shortUrl } = useBitly();

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setAnimation(true);
  }

  return (
    <div className="App">
      <div className="form">
        <div className="input">
          <input type="text" placeholder="Enter long URL..." value={input} onChange={handleChange} />
          {shortUrl.length > 0 && <img onClick={() => setInput('')} className="clear" src={clear} />}
        </div>
          <button onClick={() => getUrl(input)}>Submit</button>
      </div>
      <p>{shortUrl}</p>
      {shortUrl && <div onClick={() => handleCopy()}>{!animation ? 'Copy' : 'Copied!'}</div>}
    </div>
  );
}

export default App