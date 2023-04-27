import React from 'react';
import './CounterSongs.scss';

export default function Counter( {counter} ) {
  return (
    <>
    <p className="count-title">
        Count of songs: 
        <span className="count"> {counter} </span>
    </p>
    </>
  );
};