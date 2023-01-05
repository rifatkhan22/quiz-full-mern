import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";
const app = express();

//app middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

//routes
//api
app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Express app is running on port ${PORT}`);
});
