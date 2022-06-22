import React, { useState, useEffect } from "react";
function StopwatchAgain() {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [hour, setHour] = useState(0);
  const [stop, setStop] = useState(false);
  const [start, setStart] = useState(false);

  //condition for stop, resume
  const handleWatch = () => {
    setStop(!stop);
    console.log(stop);
  };

  //condition for start watch
  const handleStart = () => {
    setStart(true);
  };
  const showMagicWatch = () => {
    if (second === 59) {
      setMinute(minute + 1);
      setSecond(0);
    } else if (minute === 59) {
      setHour(hour + 1);
      setMinute(0);
    }
  };
  useEffect(() => {
    let timer;
    if (!stop && start) {
      timer = setTimeout(() => {
        setSecond(second + 1);
        showMagicWatch();
      }, 1000);
    } else {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer); //unmounting ke liye
  });

  //condition for stop, resume
  const handleReset = () => {
    console.log(second, minute, hour);
    setSecond(0);
    setMinute(0);
    setHour(0);
  };

  return (
    <div>
      {!start && <button onClick={handleStart}>Start Stopwatch</button>}
      <span>{hour > 9 ? hour : "0" + hour} :</span>
      <span>{minute > 9 ? minute : "0" + minute} :</span>
      <span>{second > 9 ? second : "0" + second} </span>
      <button onClick={handleWatch}>{stop ? "Resume" : "Stop"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StopwatchAgain;
