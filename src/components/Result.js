import React from 'react';
import { copy, copied } from '../assets';
import '../App.css';

const Result = (props) => {
  const { response, handleCopy, animation } = props;

  return (
    <div className="Result">
      {response && (
        <div className="results" onClick={() => handleCopy()}>
          <p className={`response-text ${!response?.success && 'error'}`}>{response?.text}</p>
          {response?.success && <img className="copy-icon" src={!animation ? copy : copied} alt="copy-icon" />}
        </div>
      )}
    </div>
  );
}

export default Result;
