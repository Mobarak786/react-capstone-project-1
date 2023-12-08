import React from "react";
import styles from "./profilecard.module.css";
import cartoon from "../../../assets/images/cartoon.png";

const profileCard = () => {
  const userData = JSON.parse(localStorage.getItem("form-data"));
  const generData = JSON.parse(localStorage.getItem("category"));
  return (
    <div className={styles.profile_card}>
      <div className={styles.profile_image}>
        <img src={cartoon} alt="cartoon" />
      </div>
      <div className={styles.profile_details}>
        <h3>{userData.name}</h3>
        <h3>{userData.email}</h3>
        <h1>{userData.username}</h1>
        <div className={styles.profile_geners}>
          {generData.map((value) => (
            <div key={value}>
              <h2>{value}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default profileCard;
