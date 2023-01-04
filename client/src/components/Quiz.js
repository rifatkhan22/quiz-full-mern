import React, { useEffect } from "react";
import Questions from "./Questions";

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";

import { useSelector, useDispatch } from "react-redux";

export default function Quiz() {
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(queue);
    //print out two reducers questions and results
    //questions has properties of queue and answers and trace
    //results has UserId and result
  });

  //next button evt handler
  function onNext() {
    console.log("On next click");
    if (trace < queue.length) {
      //will update trace value by one using move next action
      dispatch(MoveNextQuestion());
    }
  }

  //previous button evt handler
  function onPrevious() {
    //console.log("On previous click");
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>
      <Questions />
      <div className="grid">
        <button className="btn prev" onClick={onPrevious}>
          Previous
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
