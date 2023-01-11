# quiz-full-mern
Welcome to the quiz application

There will be 8 questions that the user needs to answer. At the end of the quiz, the quiz result will be displayed. This result will be saved to MongoDB database for each unique user.

Questions can be also pulled from the back-end. Within the fetchQuestion.js, make sure to uncomment lines 30 to 33 to pull questions from mongoDB. Plus, replace question with questions.

Redux was used to to manage state changes. Reducers were used to return a new state based on actions that change the reducer state. 4 reducers were used:
startExamAction: using action variable -access the value of user input and use state to access current state.
get user input value through action.payload and update state
moveNextAction: updated the trace(index of question) value by +1 when the next-button is clicked
movePrevAction: updated the trace(index of question) value by -1 when the next-button is clicked
resetAllAction: click restart button and return to the initial state

Future Improvements
User authentication can be added and additional game modes to improve user experience. More questions can also be added as well to improve user satisfaction.

Front-end deployment using netlify
https://mernquiz.netlify.app/



Back-end deployment using render

View all questions
Get request to questions
https://mern-quiz.onrender.com/api/questions



view all users results
Get request to result
https://mern-quiz.onrender.com/api/result
