import React, { useState } from 'react';
import { copy, copied } from '../assets';
import { handleCopy, reset } from '../helpers';
import '../App.css';

const Result = (props) => {
  const { input, setInput, shortUrl, setShortUrl } = props;
  const [animation, setAnimation] = useState(false);

  return (
    <div className="Results">
      <input type="text" placeholder="Enter long URL..." value={input} onChange={e => setInput(e.target.value)} />
      <div className="short-url" onClick={() => handleCopy(shortUrl, setAnimation)}>
          <p>{shortUrl}</p>
          <img className="copy" src={!animation ? copy : copied} alt="copy icon" />
      </div>
      <button className="clear-button" onClick={() => reset(setInput, setAnimation, setShortUrl)}>Clear</button>
    </div>
  );
}

export default Result
