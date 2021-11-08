import React, { useEffect, useState} from "react";
import { API_KEY } from '../settings';
import "../App.css";


export const Card = ({city}) => {
  const [data, setData] = useState(null);

  useEffect(()=> {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res=> res.json())
    .then (setData);
  }, []);

  console.log('data', data);
  if (!data) return null;
  const {name, weather, main} = data;
  const {description, icon} = weather[0];
  const {temp, humidity, feels_like} = main;
    return (
    <div className="Card"> 
      <div className="MainInfo">
        <img className="Icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
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
};
