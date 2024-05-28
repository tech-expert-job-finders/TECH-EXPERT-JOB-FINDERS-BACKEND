import { Schema } from "mongoose";
import mongoose from "mongoose";
const coverLetterSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    middelName: {
      type: String,
    },
    lastName: {
      type: String,
      // required: true,
    },
    profession: {
      type: String,
    },
    address: {
      type: String,
      // required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    recipient: {
      type: String,
      // required:true,
    },

    companyName: {
      type: String,
      // required:true,
    },

    streetAdress: {
      type: String,
      // required:true,
    },
    city: {
      type: String,
      // required:true,
    },
    state: {
      type: String,
      // required:true,
    },
    userId: {
      type: String,
      // required:true,
    },
    templateId: {
      type: String,
      // required:true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("coverLetter", coverLetterSchema);
