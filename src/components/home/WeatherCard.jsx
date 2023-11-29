import React from "react";
import { useFetch } from "../../utils/FetchData";

const WeatherCard = () => {
  // const { isLoading, serverError, apiData } = useFetch(
  //   ""
  // );
  // console.log(apiData);
  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h1>2-20-2023</h1>
        <h1>07:35 PM</h1>
      </div>
      <div className="weather-card-body">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default WeatherCard;
