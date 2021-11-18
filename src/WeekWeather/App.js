import React, { useContext } from "react";
import { GlobalContext } from "../App";
import { Card } from "../Card/App";
import "../App.css";

export const WeekWeather = () => {
  const {
    state: { citiesList },
  } = useContext(GlobalContext);

  return <div className="CardList"><Card city={"London"}/></div>;
};
