import React from "react";
import { useFetch } from "../../utils/FetchData";
import pressure from "../../assets/icons/pressure.png";
import wind from "../../assets/icons/wind.png";
import humidity from "../../assets/icons/humidity.png";
import { calculateDate, calculateTime } from "../../Functions";
const url =
  "https://api.weatherapi.com/v1/current.json?key=09292ebca7184871bdf182337232911&q=India&aqi=no";
const WeatherCard = () => {
  const { isLoading, serverError, apiData } = useFetch(url);

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h1>{calculateDate()}</h1>
        <h1>{calculateTime()} PM</h1>
      </div>
      <div className="weather-card-body">
        <div id="weather-bar">
          <img src={apiData?.current?.condition?.icon} alt="weather" />
          <p>{apiData?.current?.condition?.text}</p>
        </div>
        <div>
          <h2 id="temprature">{apiData?.current?.temp_c}°C</h2>
          <div id="temp-bar">
            <img src={pressure} alt="pressure" />
            <p>
              {apiData?.current?.pressure_mb} mbar
              <br />
              pressure
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={wind} alt="wind" />
            <p>
              {apiData?.current?.wind_kph} km/h
              <br />
              wind
            </p>
          </div>
          <div>
            <img src={humidity} alt="humidity" />
            <p>
              {apiData?.current?.humidity} %<br />
              humidity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
