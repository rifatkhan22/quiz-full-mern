import React from "react";
import Questions from "./Questions";

export default function Quiz() {
  //next button evt handler
  function onNext() {
    console.log("On next click");
  }
  //previous button evt handler
  function onPrevious() {
    console.log("On previous click");
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
