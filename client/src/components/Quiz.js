import React, { useEffect, useState } from "react";
import Questions from "./Questions";

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);

  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(result);
    //print out two reducers questions and results
    //questions has properties of queue and answers and trace
    //results has UserId and result
  });

  //next button evt handler
  function onNext() {
    //console.log("On next click");
    if (trace < queue.length) {
      //will update trace value by one using move next action
      dispatch(MoveNextQuestion());

      //insert a new result  in the array
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
  }

  //previous button evt handler
  function onPrevious() {
    //console.log("On previous click");
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    console.log(check);
    setChecked(check);
  }

  //finished exam after last question
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>
      <Questions onChecked={onChecked} />
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
