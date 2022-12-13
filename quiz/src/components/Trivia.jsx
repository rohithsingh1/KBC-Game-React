import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../components/sounds/play.mp3";
import correct from "../components/sounds/correct.mp3";
import wrong from "../components/sounds/wrong.mp3";

function Trivia({ data, questionNumber, setQuestionNumber, setStop }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    if (questionNumber <= 15) {
      setQuestion(data[questionNumber - 1]);
    }
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(500, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(3500, () => {
      if (a.correct) {
        correctAnswer();
        delay(2600, () => {
          if (questionNumber < 15) {
            setQuestionNumber((prev) => prev + 1);
            setSelectedAnswer(null);
          } else {
            setStop(true);
          }
        });
      } else {
        wrongAnswer();
        delay(2600, () => {
          setStop(true);
        });
      }
    });
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trivia;
