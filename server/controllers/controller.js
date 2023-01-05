//get all questions
export async function getQuestions(req, res) {
  res.json("questions api get request");
}

//insert all questions
export async function insertQuestions(req, res) {
  res.json("questions api post request");
}

//delete all questions
export async function deleteQuestions(req, res) {
  res.json("questions api delete request ");
}

//get all result
export async function getResult(req, res) {
  res.json("result api get request");
}

//post all result
export async function insertResult(req, res) {
  res.json("result api post request");
}

//delete all results
export async function deleteResult(req, res) {
  res.json("result api delete request");
}
