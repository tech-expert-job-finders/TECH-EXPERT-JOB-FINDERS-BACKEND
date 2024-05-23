import express from "express"
import { createFeedback, deleteFeedback, getAllFeedback, getSingleFeedback, updateFeedback } from "../Controllers/feedbackController.js"
const feedbackRoutes = express.Router()

// http://{domain-name}/api/feedback/create
feedbackRoutes.post('/create', createFeedback)

// http://{domain-name}/api/feedback/:feedbackId
feedbackRoutes.put('/:feedbackId', updateFeedback)

// http://{domain-name}/api/feedback/:feedbackId
feedbackRoutes.delete('/:feedbackId', deleteFeedback)

// http://{domain-name}/api/feedback/:feedbackId
feedbackRoutes.get('/:feedbackId', getSingleFeedback)

// http://{domain-name}/api/feedback/
feedbackRoutes.get('/', getAllFeedback)

// http://{domain-name}/api/feedback/
// feedbackRoutes.get('/find/query', searchFeedback)


export default feedbackRoutes