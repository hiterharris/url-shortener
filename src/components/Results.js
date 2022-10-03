import React, { useState } from 'react';
import useBitly from '../hooks/useBitly';
import clear from '../assets/clear.png';
import copy from '../assets/copy2.png';
import copied from '../assets/copied.png';
import '../App.css';

function Results() {
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
            <img onClick={() => setInput('')} className="clear" src={clear} />
        </div>

        <div className="results" onClick={handleCopy}>
            <p>{shortUrl}</p>
            <img className="copy" src={!animation ? copy : copied} />
        </div>

      <button className="clear-button" onClick={() => reset()}>Clear</button>
    </div>
  );
}

export default Results