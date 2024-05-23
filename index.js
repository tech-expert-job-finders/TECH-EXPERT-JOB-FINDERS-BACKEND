import express from "express";
import mongoose from "mongoose";
// import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// import cors from "cors";
import UserRoute from "./Routes/UserRoute.js";


dotenv.config();
const app = express();

//Port defined in env if in no one in .env then 5500 is executed.. ====>
const PORT = process.env.PORT || 5500;  //
// console.log(PORT);

// Connect to MongoDB =====>
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Backend Connected");
    })
    .catch((error) => {
      throw error;
    });
};

// Middlewares=====>>>>
// app.use(cookieParser());
// app.use(express.json());
app.use(bodyParser.json());
// //Reading in json file for this body parser =====>
// app.use(cors());

// middlewares =====>
app.use("/api/auth", UserRoute);


//Error Middleware ====>
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  const errorStack = err.stack || "No stack trace available";

  console.error("error stack", errorStack);
  console.error("error Message", errorMessage);

  return res.status(errorStatus).json({
    status: errorStatus,
    message: errorMessage,
    stack: errorStack,
  });
});

// SERVER LISTENING ON THE PORT
app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on this ${PORT}`);
});