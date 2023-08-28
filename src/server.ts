import express from "express";
import userRouter from "./routes/user.routes";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);

app.listen(8000, () => {
  console.log(`http://localhost:8000`);
});
