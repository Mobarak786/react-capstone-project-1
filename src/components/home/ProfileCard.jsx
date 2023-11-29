import React from "react";
import cartoon from "../../assets/images/cartoon.png";

const profileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={cartoon} alt="cartoon" />
      </div>
      <div className="profile-details">
        <h3>KK Vinay</h3>
        <h3>abc@gmail.com</h3>
        <h1>vinay123</h1>
        <div className="profile-geners">
          <div>
            <h2>Action</h2>
          </div>
          <div>
            <h2>action</h2>
          </div>
          <div>
            <h2>action</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profileCard;
