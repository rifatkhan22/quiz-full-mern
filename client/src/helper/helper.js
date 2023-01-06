import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

export function attempts_Number(result) {
  //filter returns new array that passes
  // if user value is not undefined
  //return the length of result
  //total=8 skipped 2 questions will return 6
  return result.filter((r) => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
  //iterate over result
  return result
    .map((element, index) => answers[index] === element) //map through result array and compare to answers return (true and false)
    .filter((index) => index) //filter and returns only true values
    .map((index) => point) //for each correct answer return 10
    .reduce((prev, curr) => prev + curr, 0); //reducer walks through array element by element and add the current array value until no more values to add
}

export function flagResult(totalPoints, earnPoints) {
  return (totalPoints * 50) / 100 < earnPoints;
  //if less than 50% then you get a fail
}

//check user authentication
export function CheckUserExist({ children }) {
  //if returns the value of auth then return children
  //else nav somewhere else
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace={true}></Navigate>;
}

//get server data
export async function getServerData(url, callback) {
  //only access data property if we have it
  const data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
}

//post server data
export async function postServerData(url, result, callback) {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
}

//getServerData("http://localhost:8000/api/result");
