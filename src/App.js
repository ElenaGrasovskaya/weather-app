import "./App.css";
import { Home } from "./Home/App";
import {WeekWeather} from  "./WeekWeather/App";

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useCitiesList } from "./hooks/useCitiesList";
export const GlobalContext = React.createContext();
function App() {
  const [state, dispatch] = useCitiesList();
  const { inputValue, citiesList, editCity } = state;
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/week-weather" element={<WeekWeather />}></Route>
        </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
