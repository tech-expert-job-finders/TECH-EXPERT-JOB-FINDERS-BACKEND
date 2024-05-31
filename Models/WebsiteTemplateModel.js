import { Schema } from "mongoose";
import mongoose from "mongoose";
const websiteTemplateModel = Schema(
  {
    websiteTemplateName: {
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
  "Website Template",
  websiteTemplateModel
);
