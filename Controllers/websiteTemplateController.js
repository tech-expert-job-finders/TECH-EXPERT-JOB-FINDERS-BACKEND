import websiteTemplateModel from "../Models/WebsiteTemplateModel.js";
import { createError } from "../Utils/error.js";

export const websiteTemplate = async (req, res, next) => {
  try {
    const newWebsite = new websiteTemplateModel({
      ...req.body,
    });

    await newWebsite.save();
    let message = "Data saved Successfully";
    res.status(200).json({
      status: "Success",
      message: message,
      data: newWebsite,
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};
// 6657bcadbb33595c2763d0c8
// Get Single Resume

export const getSingleWebsite = async (req, res, next) => {
  try {
    const websiteId = req.params.websiteId;
    console.log(websiteId);
    const getWebsite = await websiteTemplateModel.findById(websiteId);
    res.status(200).json({
      status: "Success",
      message: " Single Website Found",
      data: getWebsite,
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};

//  Get All Resumes Templates

export const getAllWebsite = async (req, res, next) => {
  try {
    const getAllWebsitedata = await websiteTemplateModel.find();
    res.status(200).json({
      status: "Success",
      message: " All Website Found",
      data: getAllWebsitedata,
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};

// export const updateResume = async (req, res, next) => {
//   try {
//     const letterId = req.params.letterId;
//     const updateLetter = await CoverLetterModel.findByIdAndUpdate(
//       letterId,
//       { $set: req.body },
//       { new: true }
//     );

//     if (!updateLetter) {
//       return next(createError(404, "User not found"));
//     }

//     res.status(200).json({
//       status: "success",
//       message: "User Updated Successfully",
//       data: updateLetter,
//     });
//   } catch (error) {
//     next(createError(error.status || 500, error.message || "Server Error"));
//   }
// };

// export const deleteResume = async (req, res, next) => {
//   try {
//     const letterId = req.params.letterId;
//     const deleteLetter = await CoverLetterModel.findByIdAndDelete(letterId);
//     console.log(deleteLetter);
//     if (!deleteLetter) {
//       res.status(404).json({
//         status: "failed",
//         message: "this letter not available",
//       });
//     } else {
//       res.status(200).json({
//         status: "success",
//         message: "Letter Deleted Successfully",
//       });
//     }
//   } catch (error) {
//     next(createError(error.status, error.message));
//   }
// };
