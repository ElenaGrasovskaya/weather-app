import React, { useState, useRef } from "react";

import "../App.css";

export const Input = ({ setCitiesList }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleOnClick = () => {
    setCitiesList((currentArray) => [...currentArray, inputValue]);
    setInputValue('');
    inputRef.current.focus();
  };
  return (
    <div className="InputWrap">
      <input
        className="Input"
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      />
      <button className="Button" onClick={handleOnClick}>
        +
      </button>
    </div>
  );
};
