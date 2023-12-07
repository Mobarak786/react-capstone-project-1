import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Browse.module.css";
import superapp from "../../assets/icons/Superapp.png";
import usericon from "../../assets/icons/usericon.png";
import Movie from "../../components/movie/Movie";
const BrowseEntertainment = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  const genres = JSON.parse(localStorage.getItem("category"));

  return (
    <main className={styles.mainSection}>
      <header className={styles.header}>
        <img
          onClick={handleClick}
          className={styles.supericon}
          src={superapp}
          alt="super-app-icon"
        />
        <div>
          <img
            onClick={handleClick}
            className={styles.usericon}
            src={usericon}
            alt="user-icon"
          />
        </div>
      </header>

      <div className={styles.movies_section}>
        <h2 className={styles.heading}>
          Entertainment according to your choice
        </h2>

        {genres.map((genre) => (
          <div key={genre} className={styles.movies_list}>
            <h3>{genre}</h3>
            <div className={styles.movie}>
              <Movie genre={genre} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BrowseEntertainment;
