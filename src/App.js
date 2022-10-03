import React, { useState } from 'react';
import useBitly from './hooks/useBitly';
import clear from './assets/clear.png';
import copy from './assets/copy2.png';
import copied from './assets/copied.png';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [animation, setAnimation] = useState(false);
  const { getUrl, shortUrl, setShortUrl } = useBitly();

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setAnimation(true);
  }

  const reset = () => {
    setInput('');
    setAnimation(false);
    setShortUrl('')
  }

  return (
    <div className="App">
      <div className="form">
          <input type="text" placeholder="Enter long URL..." value={input} onChange={e => setInput(e.target.value)} />
          {shortUrl.length > 0 && <img onClick={() => setInput('')} className="clear" src={clear} />}
      </div>

      {shortUrl?.length > 0 && (
        <div className="results" onClick={handleCopy}>
          <p>{shortUrl}</p>
          <img className="copy" src={!animation ? copy : copied} />
        </div>
      )}

      {shortUrl.length > 0 ? <button className="clear-button" onClick={() => reset()}>Clear</button> : <button className="submit-button" onClick={() => getUrl(input)}>Submit</button>}

    </div>
  );
}

export default App