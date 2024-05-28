import { Schema } from "mongoose";
import mongoose from "mongoose";
const resumeTemplateModel = Schema(
  {
    resumeTemplateName: {
      type: String,
      required: true,
    },
    previewImage: {
      type: String,
    },
    category: {
      type: String,
      enum: ["free", "premium"],
      default: "free",
    },
    price: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "Resume Template",
  resumeTemplateModel
);
