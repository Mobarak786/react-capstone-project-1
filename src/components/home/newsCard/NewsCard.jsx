import React from "react";
import mountain from "../../../assets/images/mountain.png";
import { useFetch } from "../../../api/FetchData";

import styles from "./newscard.module.css";
const url = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "321656a428msh72cbecc728eb64dp14568ajsnf28d506e0437",
    "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
  },
};

const NewsCard = () => {
  const { apiData, serverError } = useFetch(url, options);
  const random = Math.floor(Math.random() * 50);
  serverError && console.log(serverError);
  console.log(apiData?.data[random]);

  return (
    <div className={styles.news_card}>
      <div className={styles.news_header}>
        {apiData !== null ? (
          <img src={apiData?.data[random]?.thumbnail} alt="news-image" />
        ) : (
          <img src={mountain} alt="news_image" />
        )}
        <div className={styles.news_title}>
          <h1>{apiData?.data[random]?.title}</h1>
          <h3>
            <span>{apiData?.data[random]?.createdAt}</span>
          </h3>
        </div>
      </div>
      <div className={styles.news_body}>
        <div>
          {apiData?.data[random]?.description}
          <a href={apiData?.data[random]?.url} target="blank">
            <h4 style={{ marginTop: 5, color: "blue" }}>Link</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
