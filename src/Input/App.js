import React, { useState, useRef } from "react";

import "../App.css";

export const Input = ({ dispatch, inputValue, editCity }) => {
  const inputRef = useRef(null);

  const handleOnClick = () => {
    if (inputValue.length) {
      dispatch({
        type: "ADD_CITY",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT_VALUE",
      });
    }

    inputRef.current.focus();
  };

  const handleOnDone = () => {
    if (inputValue.length) {
      dispatch({
        type: "EDIT_CITY_DONE",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT_VALUE",
      });
    }

    inputRef.current.focus();
  };

  const handleOnChange = (event) => {
    dispatch({
      type: "CHANGE_INPUT_VALUE",
      payload: event.target.value,
    });
  };
  return (
    <div className="InputWrap">
      <input
        className="Input"
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      />
      {editCity ? (
        <button className="Button" onClick={handleOnDone}>
          Done
        </button>
      ) : (
        <button className="Button" onClick={handleOnClick}>
          +
        </button>
      )}
    </div>
  );
};
