import React, { useEffect } from "react";
import Questions from "./Questions";

import { useSelector } from "react-redux";
export default function Quiz() {
  const state = useSelector((state) => state);

  useEffect(() => {
    //console.log(state);
    //print out two reducers questions and results
    //questions has properties of queue and answers and trace
    //results has UserId and result
  });

  //next button evt handler
  function onNext() {
    //console.log("On next click");
  }

  //previous button evt handler
  function onPrevious() {
    //console.log("On previous click");
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>
      <Questions />
      <div className="grid">
        <button className="btn prev" onClick={onPrevious()}>
          Previous
        </button>
        <button className="btn next" onClick={onNext()}>
          Next
        </button>
      </div>
    </div>
  );
}
