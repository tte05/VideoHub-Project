import express  from "express";
const app = express();
import connectDb from "./config/db";
import dotenv from "dotenv";
dotenv.config();
connectDb();


const port = process.env.PORT || 8000;
 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });