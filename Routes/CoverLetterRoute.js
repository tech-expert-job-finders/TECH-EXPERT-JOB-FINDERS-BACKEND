import express from "express";
// import {verifyToken} from '../Utils/verifyToken.js'
import { coverLetterInfo, deleteLetter, getAllLetter, getSingleLetter, updateLetter } from "../Controllers/CoverLetterController.js";
const CoverLetterRoute = express.Router();

CoverLetterRoute.post("/coverLetterInfo", coverLetterInfo);
CoverLetterRoute.get("/getletter/:letterId", getSingleLetter);
CoverLetterRoute.get("/getAllLetter/find", getAllLetter);
CoverLetterRoute.put("/update/:letterId", updateLetter);
CoverLetterRoute.delete("/delete/:letterId", deleteLetter);


export default CoverLetterRoute;
