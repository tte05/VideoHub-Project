import express  from "express";
const app = express();
import connectDb from "./config/db";
import dotenv from "dotenv";
import routes from "./route";
dotenv.config();
connectDb();


const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);
 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });