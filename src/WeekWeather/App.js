import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";
import { WeekWeatherCard } from "../WeekWeatherCard/App";
import "../App.css";
import { useWeekWeather } from "../hooks/useWeekWeather";

export const WeekWeather = () => {
  const { state } = useContext(GlobalContext);

  const [data, setData] = useState({ daily: [] });

  console.log("state", state.coord);
  const allWeather = useWeekWeather(state.coord);
  if (!allWeather) return "help";
 // setData(allWeather);

  console.log("WeekWeather data", allWeather);
  let dailyArray = [];
  for(let i=0; i<8; i++);
  {
    dailyArray.push(allWeather.daily.i); 
  }
  console.log("dailyArray", dailyArray);

  return (
    <div className="CardList">
      {typeof(dailyArray)}
      
    </div>
  );
};
