import React from "react";
import mountain from "../../assets/images/mountain.png";
import { useFetch } from "../../utils/FetchData";

const url =
  "https://news67.p.rapidapi.com/v2/country-news?fromCountry=us&onlyInternational=true";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "321656a428msh72cbecc728eb64dp14568ajsnf28d506e0437",
    "X-RapidAPI-Host": "news67.p.rapidapi.com",
  },
};

const NewsCard = () => {
  const { isLoading, apiData, serverError } = useFetch(url, options);

  return (
    <div className="news-card">
      <div className="news-header">
        {apiData !== null && serverError !== null ? (
          <img src={""} alt="news-image" />
        ) : (
          <img src={mountain} alt="news-image" />
        )}
        <div className="news-title">
          <h1>
            {apiData !== null && serverError !== null
              ? ""
              : "Want to climb Mount Everest?"}
          </h1>
          <h3>
            <span>date</span> | <span>time</span>
          </h3>
        </div>
      </div>
      <div className="news-body">
        {apiData !== null && serverError !== null ? (
          ""
        ) : (
          <p>
            In the years since human beings first reached the summit of Mount
            Everest in 1953, climbing the world’s highest mountain has changed
            dramatically. Today, hundreds of mountaineers manage the feat each
            year thanks to improvements in knowledge, technology, and the
            significant infrastructure provided by commercially guided
            expeditions that provide a veritable highway up the mountain for
            those willing to accept both the......
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
