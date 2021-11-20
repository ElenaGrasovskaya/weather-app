import { useState, useEffect } from "react";
import { API_KEY } from "../settings";

export const useWeekWeather = (coord = {lon:0, lat:0}) => {

  const [data, setData] = useState(null);

  let [lon, lat] = [coord.lon, coord.lat];
  console.log ( "Hook coordinates", lon, lat,);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then(setData);
  }, [lon, lat]);
    return data;
};
