import React from "react";
import ProfileCard from "../components/home/profileCard";
import WeatherCard from "../components/home/WeatherCard";
import NewsCard from "../components/home/NewsCard";
import Notes from "../components/home/Notes";
import Timer from "../components/home/timer/Timer";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-sec-1">
        <div className="weather-profile-note-sec">
          <div className="weather-profile-sec">
            <ProfileCard />
            <WeatherCard />
          </div>
          <div className="note-section">
            <Notes />
          </div>
        </div>
        <div className="timer-section">
          <Timer />
        </div>
      </div>
      <div className="home-page-sec-2">
        <NewsCard />
      </div>
      <div className="browse-btn-sec">
        <button>Browse</button>
      </div>
    </div>
  );
};

export default Home;
