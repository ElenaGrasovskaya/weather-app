import { useEffect, useReducer } from "react";

const initialState = {
  inputValue: "",
  editCity: "",
  citiesList: JSON.parse(localStorage.getItem("citiesList")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY": {
      const newState = {
        ...state,
        citiesList: [...state.citiesList, action.payload],
      };
      return newState;
    }
    case "DELETE_CITY": {
      const oldArray = state.citiesList;
      const newArray = oldArray.filter((el) => el !== action.payload);

      return { ...state, citiesList: newArray };
    }
    case "EDIT_CITY": {
      return { ...state, inputValue: action.payload, editCity: action.payload };
    }
    case "EDIT_CITY_DONE": {
      const { editCity } = state;
      const oldArray = state.citiesList;
      const filteredArray = oldArray.filter((el) => el !== editCity);
      const newArray = [...filteredArray, action.payload];
      return {
        ...state,
        citiesList: newArray,
        inputValue: initialState.inputValue,
        editCity: initialState.editCity,
      };
    }

    case "CHANGE_INPUT_VALUE": {
      return { ...state, inputValue: action.payload };
    }

    case "CHANGE_COORD": {
      return { ...state, coord: action.payload };
    }

    case "CURRENT_CITY": {
      return { ...state, currentCity: action.payload };
    }

    case "RESET_INPUT_VALUE": {
      return { ...state, inputValue: initialState.inputValue };
    }

    default: {
      return initialState;
    }
  }
};

export const useCitiesList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { citiesList } = state;

  useEffect(() => {
    localStorage.setItem("citiesList", JSON.stringify(citiesList));
  }, [citiesList]);
  return [state, dispatch];
};
