import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//custom hook
import { useFetchQuestion } from "../hooks/FetchQuestion";
export default function Questions() {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion(); //will return array

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  ); //will return array of questions
  const trace = useSelector((state) => state.questions.trace);

  useEffect(() => {
    //console.log(trace);
    //print out two reducers questions and results
    //questions has properties of queue and answers and trace
    //results has UserId and result
  });

  function onSelect() {
    //console.log("Change radio button");
  }
  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;

  //only access the property when we have that property
  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect()}
            />

            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
