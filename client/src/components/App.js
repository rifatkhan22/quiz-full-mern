import "../styles/App.css";
//react router
//routerProvider route objects passed to this to render the app

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import components
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import { CheckUserExist } from "../helper/helper";

// router variable with array of route paths to diff comps
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
