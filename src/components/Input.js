import React from 'react';
import '../App.css';

const Input = (props) => {
  const { input, setInput, getUrl, isDesktop } = props;
  return (
    <div className="Input">
      <input type="text" placeholder="Enter long URL..." value={input} onChange={e => setInput(e.target.value)} />
      <button className={`shorten-button ${isDesktop ? 'desktop' : 'mobile'}`} onClick={() => getUrl(input)}>Shorten URL</button>
    </div>
  );
}

export default Input;
