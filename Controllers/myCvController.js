import CvModel from "../Models/CvModel.js";
import { createError } from "../Utils/error.js";

export const createCv = async (req, res, next) => {
  try {
    const createCv = await new CvModel({
      ...req.body,
    });

    const saveCV = await createCv.save();

    res.status(200).json({
      status: "success",
      message: "Resume created successfully",
      data: saveCV,
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};

export const updateCv = async (req, res, next) => {
  try {
    const cvId = req.params.cvId;

    const updateCv = await CvModel.findByIdAndUpdate(
      cvId,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      message: "Resume updated successfully",
      data: updateCv,
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};

export const deleteCv = async (req, res, next) => {
  try {
    const cvId = req.params.cvId;
    const deleteCv = await CvModel.findById(cvId);
    if (deleteCv) {
      await CvModel.findByIdAndDelete(cvId);
      res.status(200).json({
        status: "success",
        message: "Resume deleted successfully",
      });
    } else {
      res.status(404).json({
        status: "failed",
        message: "Resume not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getSingleCv = async (req, res, next) => {
  try {
    const cvId = req.params.cvId;
    const cv = await CvModel.findById(cvId);
    if (!cv) {
      res.status(404).json({
        status: "failed",
        message: "Resume not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Resume found successfully",
      data: cv,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCv = async (req, res, next) => {
  try {
    const allResumes = await CvModel.find();
    if (!allResumes) {
      res.status(404).json({
        status: "failed",
        message: "No allResumes available",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "allResumes found successfully",
        data: allResumes,
      });
    }
  } catch (error) {
    next(error);
  }
};
