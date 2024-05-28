import resumeTemplateModel from "../Models/ResumeTemplateModel.js";
import { createError } from "../Utils/error.js";

export const resumeTemplate = async (req, res, next) => {
  try {
    const newResume = new resumeTemplateModel({
      ...req.body,
    });

    await newResume.save();
    let message = "Data saved Successfully";
    res.status(200).json({
      status: "Success",
      message: message,
      data: newResume,
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};
// Get Single Resume

export const getSingleResume = async (req, res, next) => {
  try {
    const resumeId = req.params.resumeId;
    // console.log(resumeId);
    const getResume = await resumeTemplateModel.findById(resumeId);
    res.status(200).json({
      status: "Success",
      message: " Single Resume Found",
      data: getResume,
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};

//  Get All Resumes Templates

export const getAllResume = async (req, res, next) => {
  try {
    const getAllResume = await resumeTemplateModel.find();
    res.status(200).json({
      status: "Success",
      message: " All Resumes Found",
      data: getAllResume,
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
