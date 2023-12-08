import React from "react";
import styles from "./timer.module.css";
import { Hours, Minutes, Seconds } from "../../../Functions";

const Countdown = ({ stroke, totaltime }) => {
  return (
    <div className={styles.counter}>
      <svg className="progerss" width="140" height="140">
        <circle
          style={{
            strokeDasharray: "410",
            strokeDashoffset: stroke,
          }}
          cx="70"
          cy="70"
          r="65"
          fill="transparent"
          stroke="rgba(255, 106, 106, 1)"
          strokeWidth="5"
        />
        <text className={styles.progress_bar_text} x="18" y="80" fill="white">
          {Hours(totaltime) < 10
            ? `0${Hours(totaltime)}:`
            : `${Hours(totaltime)}:`}
          {Minutes(totaltime) < 10
            ? `0${Minutes(totaltime)}:`
            : `${Minutes(totaltime)}:`}
          {Seconds(totaltime) < 10
            ? `0${Seconds(totaltime)}`
            : Seconds(totaltime)}
        </text>
      </svg>
    </div>
  );
};

export default Countdown;
