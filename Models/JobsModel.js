import { Schema } from "mongoose";
import mongoose from "mongoose";
const jobSchema = Schema({
    companyName: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    postion: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    jobTiming: {
        type: String,
    },
    startSalary: {
        type: Number,
    },
    endSalary: {
        type: Number,
    },
    benefits: {
        type: [String],
    },
    skills: {
        type: [String],
    },
    hashtags: {
        type: [String],
    },
    keywords: {
        type: [String],
    },
},
    { timestamps: true }
)

export default mongoose.model('Job', jobSchema);