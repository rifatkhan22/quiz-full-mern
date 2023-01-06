//useRef hook allows to store mutable value
import React, { useRef } from "react";
//allows to dispatch actions
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import "../styles/Main.css";

export default function Main() {
  //inputRef get value of text using useRef react hook
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    //if we have  value in input textbox then will execute dispatch function
    //then we will authorize the user
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <ol>
        <li>There are 8 questions. Please answer all questions</li>
        <li>10 Points for each correct answer</li>
        <li>
          You can go back and change answers and score will be displayed at the
          end
        </li>
      </ol>

      <form id="form">
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="Username*"
        />
      </form>
      <div className="start">
        {/*navigate user to the quiz route */}
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
