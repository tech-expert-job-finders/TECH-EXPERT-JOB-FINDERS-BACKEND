import { Schema } from "mongoose";
import mongoose from "mongoose";
const CoverLetterTemplateSchema = Schema(
    {
        templateName: {
            type: String,
            required: true,
        },
        previewImage: {
            type: String,
        },
        category: {
            type: String,
            enum: ["free", "premium"],
            default: "free"
        },
        HTMLCode: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Cover Letter Template", CoverLetterTemplateSchema);
