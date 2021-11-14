import React, { memo } from "react";
import { useWeather } from "../hooks/useWeather";
import "../App.css";

export const Card = memo(({ city, dispatch }) => {
  const data = useWeather(city);
  console.log("data", data);
  if (!data) return null;
  if (data.cod=="404") return null;
  const { name, weather, main } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  const handleOnDelete = () =>{
    dispatch ({
      type: 'DELETE_CITY',
      payload: city,
    })
  };
  
  const handleOnEdit = () =>{
    dispatch ({
      type: 'EDIT_CITY',
      payload: city,
    })
  };
  return (
    <div className="Card">
      <div className="actionButton">
        <button className="DeleteCity" onClick = {handleOnDelete} >X</button>
        <button className="EditCity" onClick = {handleOnEdit} >Edit</button>
      </div>
      <div className="MainInfo">
        <img
          className="Icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <div className="Title">{name}</div>
        <div className="Description">{description}</div>
        <div className="Temperature">{temp.toFixed(1)}</div>
      </div>
      <div className="Information">
        <div>Humidity: {humidity}</div>
        <div>Feels like: {feels_like}</div>
      </div>
    </div>
  );
});
 