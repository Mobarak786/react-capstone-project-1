import React from "react";
import mountain from "../../assets/images/mountain.png";

const NewsCard = () => {
  return (
    <div className="news-card">
      <div className="news-header">
        <img src={mountain} alt="news-image" />
        <div className="news-title">
          <h1>Want to climb Mount Everest?</h1>
          <h3>
            <span>date</span> | <span>time</span>
          </h3>
        </div>
      </div>
      <div className="news-body">
        <p>
          In the years since human beings first reached the summit of Mount
          Everest in 1953, climbing the world’s highest mountain has changed
          dramatically. Today, hundreds of mountaineers manage the feat each
          year thanks to improvements in knowledge, technology, and the
          significant infrastructure provided by commercially guided expeditions
          that provide a veritable highway up the mountain for those willing to
          accept both the......
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
