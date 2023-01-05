import { Router } from "express";
const router = Router();

//import controllers
import * as controller from "../controllers/controller.js";

//Question Routes API
// router.get("/questions", controller.getQuestions);
// router.post("/questions", controller.insertQuestions);

router
  .route("/questions")
  .get(controller.getQuestions) //get request
  .post(controller.insertQuestions) //post request
  .delete(controller.deleteQuestions); //delete request

router
  .route("/result")
  .get(controller.getResult) //get
  .post(controller.insertResult) //post
  .delete(controller.deleteResult); //delete

export default router;
