
import WebsiteModel from "../Models/WebsiteModel.js";
import { createError } from "../Utils/error.js";

export const createWebiste = async (req, res, next) => {
  try {
    const websiteCv = await new WebsiteModel({
      ...req.body,
    });

    const savewebsite = await websiteCv.save();

    res.status(200).json({
      status: "success",
      message: "Website created successfully",
      data: savewebsite,
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};

export const updateWebsite = async (req, res, next) => {
  try {
    const websiteId = req.params.websiteId;

    const updateWebsite = await WebsiteModel.findByIdAndUpdate(
      websiteId,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      message: "Website updated successfully",
      data: updateWebsite,
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};

export const deletewebsite = async (req, res, next) => {
  try {
    const websiteId = req.params.websiteId;
    const deleteWebsiteData = await WebsiteModel.findById(websiteId);
    if (deleteWebsiteData) {
      await WebsiteModel.findByIdAndDelete(websiteId);
      res.status(200).json({
        status: "success",
        message: "Website deleted successfully",
      });
    } else {
      res.status(404).json({
        status: "failed",
        message: "Webiste not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getSinglewebsite = async (req, res, next) => {
  try {
    const websiteId = req.params.websiteId;
    const websiteData = await WebsiteModel.findById(websiteId);
    if (!websiteData) {
      res.status(404).json({
        status: "failed",
        message: "Website not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Website found successfully",
      data: websiteData,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllwebsite = async (req, res, next) => {
  try {
    const allWebsite = await WebsiteModel.find();
    if (!allWebsite) {
      res.status(404).json({
        status: "failed",
        message: "All webiste data not available",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "All Websites found successfully",
        data: allWebsite,
      });
    }
  } catch (error) {
    next(error);
  }
};
