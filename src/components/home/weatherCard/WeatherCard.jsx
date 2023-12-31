import React from "react";
import { useFetch } from "../../../api/FetchData";
import styles from "./weathercard.module.css";
import pressure from "../../../assets/icons/pressure.png";
import cloud from "../../../assets/icons/cloud.png";
import wind from "../../../assets/icons/wind.png";
import humidity from "../../../assets/icons/humidity.png";

import { calculateDate, calculateTime } from "../../../Functions";
const url =
  "https://api.weatherapi.com/v1/current.json?key=09292ebca7184871bdf182337232911&q=India&aqi=no";
const WeatherCard = () => {
  const { apiData } = useFetch(url);

  return (
    <div className={styles.weather_card}>
      <div className={styles.weather_card_header}>
        <h1>{calculateDate()}</h1>
        <h1>{calculateTime()} PM</h1>
      </div>
      <div className={styles.weather_card_body}>
        <div id="weather-bar">
          <img
            src={apiData !== null ? apiData?.current?.condition?.icon : cloud}
            alt="weather-icon"
            width={60}
            height={60}
          />
          <p>
            {apiData !== null
              ? apiData?.current?.condition?.text
              : "Heavy Rain"}
          </p>
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
