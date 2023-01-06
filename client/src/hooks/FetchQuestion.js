import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";

//redux actions
import * as Action from "../redux/question_reducer";

//fetch question hook to fetch api data and set value to store
//custom hook so use useprefix
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  //inside useEffect update getData value
  //return new state

  useEffect(() => {
    //...prev is previous state
    //will update useState
    setGetData((prev) => ({ ...prev, isLoading: true }));

    /** async function fetch backend data */
    (async () => {
      try {
        const [{ questions, answers }] = await getServerData(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,
          (data) => data
        );

        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: questions }));

          /** dispatch an action and update the store */
          dispatch(Action.startExamAction({ question: questions, answers }));
        } else {
          throw new Error("No Question Avaliable");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]); // pass in dispatch as 2nd arg(dependency) otherwise useEffect will continously loop

  return [getData, setGetData];
};

/** MoveAction Dispatch function */
//useDispatch is only accesible by a hook
//but want to dispatch an action
//so return another function wit dispatch argument-> dispatch action
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction()); /** increase trace by 1 */
  } catch (error) {
    console.log(error);
  }
};

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction()); /** decrease trace by 1 */
  } catch (error) {
    console.log(error);
  }
};
