import React from "react";

export const WeekWeatherCard = ({ date , icon, description, temp, humidity, feels_like }) =>
{
  
  return (
    <div className="Card">
      <div className="actionButton">
          <p>This is 7-days weather card</p>
        
       
      </div>
      <div className="MainInfo">
      <div className="Title">{date}</div>
        <img
          className="Icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        
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
export default WeekWeatherCard;