import express from "express";
import { getAllResume, getSingleResume, resumeTemplate } from "../Controllers/resumeTemplateController.js";
// import {verifyToken} from '../Utils/verifyToken.js'
const ResumeTemplateRoute = express.Router();

ResumeTemplateRoute.post("/create", resumeTemplate);
ResumeTemplateRoute.get("/:resumeId", getSingleResume);
ResumeTemplateRoute.get("/getAllResume/find", getAllResume);
// ResumeTemplateRoute.put("/update/:resumeId", updateLetter);
// ResumeTemplateRoute.delete("/delete/:resumeId", deleteLetter);


export default ResumeTemplateRoute;
