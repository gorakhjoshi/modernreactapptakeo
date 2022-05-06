import React from 'react';
import './Loader.css';

function Loader(props) {
  return (
    <span className="loader-wrapper">
      <div className="loader" />
      <p className="loading-message">{props.message}</p>
    </span>
  );
}

export default Loader;
