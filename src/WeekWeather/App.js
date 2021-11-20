import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";
import { WeekWeatherCard } from "../WeekWeatherCard/App";
import "../App.css";
import { useWeekWeather } from "../hooks/useWeekWeather";
import { Link } from "react-router-dom";

export const WeekWeather = () => {
  const { state } = useContext(GlobalContext);

  const [data, setData] = useState({ daily: [] });

  console.log("state.currentCity", state.currentCity);
  const allWeather = useWeekWeather(state.coord);
  if (!allWeather) return null;

  console.log("WeekWeather data", allWeather);
  console.log("WeekWeather Daily data", allWeather.daily);
  let dailyArray = allWeather.daily;
  let dates = [];
  let weather = [];
  let temp = [];
  let humidity = [];
  let feels_like = [];
  let currentDate = new Date();
  let nextDate = new Date();

  for (let i = 0; i < 8; i++) {
    nextDate.setDate(currentDate.getDate() + i);
    dates.push(nextDate.toDateString());
    weather.push(dailyArray[i].weather[0]);
    temp.push(dailyArray[i].temp.day);
    humidity.push(dailyArray[i].humidity);
    feels_like.push(dailyArray[i].feels_like.day);
  }

  console.log("dates", dates);
  console.log("weather", weather);

  return (
    <div className="Main">
      <Link to="/home">
        <button className="week-weather-back-button">	&#8592; BACK</button>
      </Link>
      <h1 className ="WeekForecastHeader">Forecast for {state.currentCity}</h1>
      <div className="WeekWeatherCardList">
        {dates.map((day, index) => (
          <WeekWeatherCard
            date={day}
            icon={weather[index].icon}
            description={weather[index].description}
            temp={temp[index]}
            humidity={humidity[index]}
            feels_like={feels_like[index]}
            key={day}
          ></WeekWeatherCard>
        ))}
      </div>
    </div>
  );
};
