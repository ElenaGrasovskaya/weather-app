import React, { useState, useRef } from "react";

import "../App.css";

export const Input = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleOnClick = () => {
    if (inputValue.length) {
      dispatch({
        type: "ADD_CITY",
        payload: inputValue,
      });
    }
    setInputValue("");
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
