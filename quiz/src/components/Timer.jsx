import React, { useEffect, useState } from "react";

function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    if (timer === 0) {
      return setStop(true);
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setStop]);

  useEffect(() => {
    if (questionNumber < 4) {
      setTimer(30);
    } else if (questionNumber > 4 && questionNumber < 9) {
      setTimer(60);
    } else {
      setTimer(90);
    }
  }, [questionNumber]);

  return timer;
}

export default Timer;
