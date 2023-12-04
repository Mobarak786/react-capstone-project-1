import React, { useState, useEffect } from "react";
import increment from "../../../assets/icons/increment.png";
import decrement from "../../../assets/icons/decrement.png";
import Countdown from "./Countdown";
import { playSound } from "../../../Functions";
let circumference = 410;

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [timer, setTimer] = useState(false);
  const [totaltime, setTotaltime] = useState(0);
  const [stroke, setStroke] = useState(circumference);
  const [strokeUnit, setStrokeUnit] = useState(0);

  const handleStart = () => {
    if (hour === 0 && minute === 0 && second === 0) return;
    setTimer(true);
    const timeInSeconds = hour * 3600 + minute * 60 + second;
    setTotaltime(timeInSeconds);
  };
  useEffect(() => {
    //returns the useeffect if time is zero this stops unlimited re-rendering...
    if (totaltime === 0) {
      playSound();
      setTimer(false);
      setHour(0);
      setMinute(0);
      setSecond(0);
      setStroke(circumference);
      setStrokeUnit(0);
      return;
    }

    //decreasing the total time every second
    const timeout = setTimeout(() => {
      setTotaltime((prev) => prev - 1);
    }, 1000);

    //decreasing the timer stroke
    setStrokeUnit(circumference / (hour * 3600 + minute * 60 + second));
    setStroke((prev) => prev - strokeUnit);

    return () => clearTimeout(timeout);
  }, [totaltime, timer]);

  const handleIncrement = (time) => {
    if (time === "hour") {
      hour >= 59 ? setHour(0) : setHour((prev) => prev + 1);
    } else if (time === "minute") {
      minute >= 59 ? setMinute(0) : setMinute((prev) => prev + 1);
    } else {
      second >= 59 ? setSecond(0) : setSecond((prev) => prev + 1);
    }
    return;
  };

  const handleDecrement = (time) => {
    if (time === "hour") {
      hour <= 0 ? setHour(59) : setHour((prev) => prev - 1);
    } else if (time === "minute") {
      minute <= 0 ? setMinute(59) : setMinute((prev) => prev - 1);
    } else {
      second <= 0 ? setSecond(59) : setSecond((prev) => prev - 1);
    }
  };
  return (
    <div className="timer-body">
      <Countdown stroke={stroke} totaltime={totaltime} />

      <div className="set-counter">
        <div className="hour-min-sec">
          <div>
            <h4>Hours</h4>
            <img
              src={increment}
              alt="increament"
              onClick={() => handleIncrement("hour")}
            />
            <p>{hour < 10 ? `0${hour}` : `${hour}`}</p>
            <img
              src={decrement}
              alt="decrement"
              onClick={() => handleDecrement("hour")}
            />
          </div>
          <span>:</span>
          <div>
            <h4>Minutes</h4>
            <img
              src={increment}
              alt="increament"
              onClick={() => handleIncrement("minute")}
            />
            <p>{minute < 10 ? `0${minute}` : `${minute}`}</p>
            <img
              src={decrement}
              alt="decrement"
              onClick={() => handleDecrement("minute")}
            />
          </div>
          <span>:</span>
          <div>
            <h4>Seconds</h4>
            <img
              src={increment}
              alt="increament"
              onClick={() => handleIncrement("second")}
            />
            <p> {second < 10 ? `0${second}` : second}</p>
            <img
              src={decrement}
              alt="decrement"
              onClick={() => handleDecrement("second")}
            />
          </div>
        </div>

        <button
          onClick={handleStart}
          disabled={timer}
          style={
            timer
              ? { background: "grey" }
              : { background: "rgba(255, 106, 106, 1)" }
          }
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Timer;
