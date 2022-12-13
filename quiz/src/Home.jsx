import React from "react";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import moneyPyramid from "./components/moneyPyramid";
import data from "./components/data";

function Home() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(0);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    questionNumber > 1 &&
      questionNumber <= 14 &&
      setEarned(
        moneyPyramid.find((m) => {
          return m.id === questionNumber - 1;
        }).value
      );
    questionNumber === 15 &&
      setEarned(
        moneyPyramid.find((e) => {
          return e.id === questionNumber;
        }).value
      );
  }, [questionNumber, moneyPyramid]);
  return (
    <>
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">
                {username} earned: $ {earned}{" "}
              </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
