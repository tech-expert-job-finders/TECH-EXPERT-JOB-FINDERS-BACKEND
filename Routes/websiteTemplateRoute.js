import express from "express";
import { getAllWebsite, getSingleWebsite, websiteTemplate } from "../Controllers/websiteTemplateController.js";
// import {verifyToken} from '../Utils/verifyToken.js'
const WebsiteTemplateRoute = express.Router();

WebsiteTemplateRoute.post("/create", websiteTemplate);
WebsiteTemplateRoute.get("/:websiteId", getSingleWebsite);
WebsiteTemplateRoute.get("/getAllWebsite/find", getAllWebsite);
// WebsiteTemplateRoute.put("/update/:resumeId", updateLetter);
// WebsiteTemplateRoute.delete("/delete/:resumeId", deleteLetter);


export default WebsiteTemplateRoute;
