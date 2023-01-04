import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

export default function Main() {
  const inputRef = useRef(null);
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <ol>
        <li>There are 10 questions. Please answer all questions</li>
        <li>For each correct answer, 10 points will be rewarded</li>
        <li>
          You can go back and change answers and quiz results will be displayed
          at the end
        </li>
      </ol>

      <form id="form">
        <input ref={inputRef} type="text" placeholder="Username*" />
      </form>
      <div className="start">
        <Link className="btn" to={"quiz"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
