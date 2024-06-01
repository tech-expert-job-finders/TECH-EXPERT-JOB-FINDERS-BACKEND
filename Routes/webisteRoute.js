import express from "express";
import { createWebiste, deletewebsite, getAllwebsite, getSinglewebsite, updateWebsite } from "../Controllers/websiteController.js";
const webisteRoute = express.Router();

// http://{domain-name}/api/job/create
webisteRoute.post("/create", createWebiste);
// data id


// http://{domain-name}/api/cv/:cvId
webisteRoute.put("/update/:websiteId", updateWebsite);

// // http://{domain-name}/api/cv/:cvId
webisteRoute.delete("/delete/:websiteId", deletewebsite);

// // http://{domain-name}/api/cv/:cvId
webisteRoute.get("/:websiteId", getSinglewebsite);

// // http://{domain-name}/api/cv/
webisteRoute.get("/getAllWebsite/find", getAllwebsite);

export default webisteRoute;
