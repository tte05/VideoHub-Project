import express  from "express";
import cors from "cors";
const app = express();
import connectDb from "./config/db";
import dotenv from "dotenv";
import routes from "./route";
import passportJwtStrategy from "./config/passportJwtStrategy";
dotenv.config();
connectDb();

const corsOptions = {
  origin: ["http://localhost:5173"],
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use(passportJwtStrategy.initialize());

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);
 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });