import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import jobRoutes from "./Routes/jobRoutes.js";
import UserRoute from "./Routes/UserRoute.js";
import blogRoutes from "./Routes/blogRoutes.js";
import feedbackRoutes from "./Routes/feedbackRoutes.js";
import CoverLetterRoute from "./Routes/CoverLetterRoute.js";
import cvRoute from "./Routes/myCvRoute.js";
import uploadRoute from "./Routes/uploadRoute.js";
import CoverLetterTemplateRoute from "./Routes/coverLetterTemplateRoutes.js";
import ResumeTemplateRoute from "./Routes/resumeTemplateRoute.js";
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51PLqWt06k5m2AJAivXSQ49uQVDNMSw0P5bYMHOnrzkgZy1O9ggJqsGWcyLnqtz7wjWsfAAUTismT8NxqvN0gEaPl00yWGbHwf8');

dotenv.config();
const app = express();

//Port defined in env if in no one in .env then 5500 is executed.. ====>
const PORT =  5000; //
// const PORT = process.env.PORT || 5500; //
// console.log(PORT);

// Connect to MongoDB =====>
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((error) => {
      throw error;
    });
};

// Middlewares=====>>>>
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
      credentials: true,
      origin: "*",
    })
);

// middlewares =====>
app.use("/api/auth", UserRoute);
app.use("/api/myCv", cvRoute);
app.use("/api/myResume", ResumeTemplateRoute);
app.use("/api/coverLetter", CoverLetterRoute);
app.use("/api/coverLetterTem", CoverLetterTemplateRoute);
app.use("/api/job", jobRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/upload", uploadRoute);

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
app.post('/create-checkout-session', async (req, res) => {
  console.log('Request received at /create-checkout-session');
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: req.body.name,
            },
            unit_amount: req.body.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://your-website.com/success',
      cancel_url: 'https://your-website.com/cancel',
    });
    console.log('Session created:', session.id);
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// SERVER LISTENING ON THE PORT
app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on this ${PORT}`);
});
