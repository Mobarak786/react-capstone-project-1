import React from "react";
import ProfileCard from "../components/home/profileCard";
import WeatherCard from "../components/home/WeatherCard";
import NewsCard from "../components/home/NewsCard";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-sec-1">
        <ProfileCard />
        <WeatherCard />
      </div>
      <div className="home-page-sec-2">
        <NewsCard />
      </div>
    </div>
  );
};

export default Home;
