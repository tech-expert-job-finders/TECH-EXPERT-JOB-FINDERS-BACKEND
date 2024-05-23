import { Schema } from "mongoose";
import mongoose from "mongoose";
const blogSchema = Schema({
    blogBy: {
        type: String,
        required: true
    },
    blogTitle: {
        type: String,
        required: true,
    },
    blog: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
)

export default mongoose.model('blog', blogSchema);