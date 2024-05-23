import express from "express"
import { createJob, deleteJob, getAllJob, getSingleJob, searchJob, updateJob } from "../Controllers/jobController.js"
const jobRoutes = express.Router()

// http://{domain-name}/api/job/create
jobRoutes.post('/create', createJob)

// http://{domain-name}/api/job/:jobId
jobRoutes.put('/:jobId', updateJob)

// http://{domain-name}/api/job/:jobId
jobRoutes.delete('/:jobId', deleteJob)

// http://{domain-name}/api/job/:jobId
jobRoutes.get('/:jobId', getSingleJob)

// http://{domain-name}/api/job/
jobRoutes.get('/', getAllJob)

// http://{domain-name}/api/job/
jobRoutes.get('/find/query', searchJob)


export default jobRoutes