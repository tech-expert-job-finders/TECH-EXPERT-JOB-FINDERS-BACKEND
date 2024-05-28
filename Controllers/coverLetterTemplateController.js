import CoverLetterTemplate from "../Models/CoverLetterTemplate.js";
import { createError } from "../Utils/error.js";

export const coverLetterTemplate = async (req, res, next) => {

    try {
        const newCoverLetter = new CoverLetterTemplate({
            ...req.body,
        });

        await newCoverLetter.save();
        let message = "Data saved Successfully";
        res.status(200).json({
            status: "Success",
            message: message,
            data: newCoverLetter,
        });
    } catch (error) {
        next(createError(error.status, error.message));
    }
};
// Get Single Letter

export const getSingleLetter = async (req, res, next) => {
    try {
        const letterId = req.params.letterId;
        console.log(letterId);
        const getLetter = await CoverLetterTemplate.findById(letterId);
        res.status(200).json({
            status: "Success",
            message: " Single Letter Found",
            data: getLetter,
        });
    } catch (error) {
        next(createError(error.status, error.message));
    }
};

//  Get All Letters

export const getAllLetter = async (req, res, next) => {
    try {
        const getAllLetter = await CoverLetterTemplate.find();
        res.status(200).json({
            status: "Success",
            message: " All Letter Found",
            data: getAllLetter,
        });
    } catch (error) {
        next(createError(error.status, error.message));
    }
};

export const updateLetter = async (req, res, next) => {
    try {
        const letterId = req.params.letterId;
        const updateLetter = await CoverLetterModel.findByIdAndUpdate(
            letterId,
            { $set: req.body },
            { new: true }
        );

        if (!updateLetter) {
            return next(createError(404, "User not found"));
        }

        res.status(200).json({
            status: "success",
            message: "User Updated Successfully",
            data: updateLetter,
        });
    } catch (error) {
        next(createError(error.status || 500, error.message || "Server Error"));
    }
};

export const deleteLetter = async (req, res, next) => {
    try {
        const letterId = req.params.letterId;
        const deleteLetter = await CoverLetterModel.findByIdAndDelete(letterId);
        console.log(deleteLetter);
        if (!deleteLetter) {
            res.status(404).json({
                status: "failed",
                message: 'this letter not available'
            })
        }
        else {
            res.status(200).json({
                status: "success",
                message: "Letter Deleted Successfully",

            });

        }


    } catch (error) {
        next(createError(error.status, error.message));
    }
};
