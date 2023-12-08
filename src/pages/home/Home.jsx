import React from "react";
import { Link } from "react-router-dom";

import styles from "./home.module.css";
import ProfileCard from "../../components/home/profileCard/ProfileCard";
import WeatherCard from "../../components/home/weatherCard/WeatherCard";
import NewsCard from "../../components/home/newsCard/NewsCard";
import Notes from "../../components/home/notes/Notes";
import Timer from "../../components/home/timer/Timer";

const Home = () => {
  return (
    <div className={styles.home_page}>
      <div className={styles.home_page_sec_1}>
        <div className={styles.weather_profile_note_sec}>
          <div className={styles.weather_profile_sec}>
            <ProfileCard />
            <WeatherCard />
          </div>
          <div className={styles.note_section}>
            <Notes />
          </div>
        </div>
        <div className={styles.timer_section}>
          <Timer />
        </div>
      </div>
      <div className={styles.home_page_sec_2}>
        <NewsCard />
      </div>
      <div className={styles.browse_btn_sec}>
        <Link to="/browseEntertainment">
          <button>Browse</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
