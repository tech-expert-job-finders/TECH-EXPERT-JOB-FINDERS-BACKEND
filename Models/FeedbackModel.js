import { Schema } from "mongoose";
import mongoose from "mongoose";
const feedbackSchema = Schema({
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    sentBy: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
)

export default mongoose.model('feedback', feedbackSchema);