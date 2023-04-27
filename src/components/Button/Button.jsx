import React from 'react'; import './Button.scss';

export default function Button({ nameOfClass, value, onClick, type }) {
  return (
    <>
      <input
        className={nameOfClass}
        type={type}
        value={value}
        onClick={onClick}
        readOnly
      />
    </>
  );
}
