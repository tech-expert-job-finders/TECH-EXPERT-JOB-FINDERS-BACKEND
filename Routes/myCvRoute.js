import express from "express";
import {
  createCv,
  deleteCv,
  getAllCv,
  getSingleCv,
  updateCv,
} from "../Controllers/myCvController.js";
const cvRoutes = express.Router();

// http://{domain-name}/api/job/create
cvRoutes.post("/create", createCv);

// http://{domain-name}/api/cv/:cvId
cvRoutes.put("/update/:cvId", updateCv);

// // http://{domain-name}/api/cv/:cvId
cvRoutes.delete("/delete/:cvId", deleteCv);

// // http://{domain-name}/api/cv/:cvId
cvRoutes.get("/:cvId", getSingleCv);

// // http://{domain-name}/api/cv/
cvRoutes.get("/getAllResumes/find", getAllCv);

export default cvRoutes;
