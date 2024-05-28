import express from "express";
import { coverLetterTemplate, getSingleLetter } from "../Controllers/coverLetterTemplateController.js";
// import {verifyToken} from '../Utils/verifyToken.js'
const CoverLetterTemplateRoute = express.Router();

CoverLetterTemplateRoute.post("/create", coverLetterTemplate);
CoverLetterTemplateRoute.get("/:letterId", getSingleLetter);
// CoverLetterTemplateRoute.get("/getAllLetter/find", getAllLetter);
// CoverLetterTemplateRoute.put("/update/:letterId", updateLetter);
// CoverLetterTemplateRoute.delete("/delete/:letterId", deleteLetter);


export default CoverLetterTemplateRoute;
