//useState track the state
//useEffect can fetch data, directly updata DOM
import React, { useEffect, useState } from "react";
//use selector allows us to extract value in the global state within application
//useDispatch dispatch actions
import { useSelector, useDispatch } from "react-redux";

//custom hooks
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);

  const [{ isLoading, apiData, serverError }] = useFetchQuestion(); //will return array of values from fetchquestion

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  ); //will specific q at trace(index) and when we click on next button
  //will increase trace by 1
  const dispatch = useDispatch();

  //dependent on variable checked
  //if checked updates then useEffect will run again
  useEffect(() => {
    //console.log({ trace, checked });
    dispatch(updateResult({ trace, checked }));
    //console.log(trace);
    //print out two reducers questions and results
    //questions has properties of queue and answers and trace
    //results has UserId and result
  }, [checked]);

  //when select any options from a question
  //access i value onSelect first choice returns 0, second choice-2 and so on
  function onSelect(i) {
    onChecked(i);
    setChecked(i);
    //allows to update previous selection
    dispatch(updateResult({ trace, checked }));
  }
  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;

  //only access the property when we have that property
  return (
    <div className="questions">
      {/*get question from question object in array */}
      <h2 className="text-light">{questions?.question}</h2>
      {/*access question id 
      map to iterate over array q=ques
       specify one q and pass diff options using map func*/}
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            {/*because of 3 options- uniquely specify unique id to all the options 0,1,2
            pass in q from that options value*/}

            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            {/*show selected answers in prev qs*/}
            <div
              className={`check ${result[trace] == i ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
