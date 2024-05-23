import FeedbackModel from "../Models/FeedbackModel.js"

export const createFeedback = async (req, res, next) => {
    try {
        const createFeedback = await new FeedbackModel(
            {
                ...req.body
            }
        )

        const saveFeedback = await createFeedback.save()

        res.status(200).json({
            status: "success",
            message: 'Feedback created successfully',
            data: saveFeedback
        })

    } catch (error) {
        // createError(error.status, error.message)
        next(error)
    }
}

export const updateFeedback = async (req, res, next) => {
    try {
        const feedbackId = req.params.feedbackId

        const updatefeedback = await FeedbackModel.findByIdAndUpdate(feedbackId, { $set: req.body }, { new: true })

        res.status(200).json({
            status: "success",
            message: 'feedback updated successfully',
            data: updatefeedback
        })
    } catch (error) {
        next(error)
    }
}

export const deleteFeedback = async (req, res, next) => {
    try {
        const feedbackId = req.params.feedbackId
        const feedback = await FeedbackModel.findById(feedbackId)
        if (feedback) {
            await FeedbackModel.findByIdAndDelete(feedbackId)
            res.status(200).json({
                status: "success",
                message: 'feedback deleted successfully',
            })
        } else {
            res.status(404).json({
                status: "failed",
                message: 'feedback not found',
            })
        }
    } catch (error) {
        next(error)
    }
}

export const getSingleFeedback = async (req, res, next) => {
    try {
        const feedbackId = req.params.feedbackId
        const feedback = await FeedbackModel.findById(feedbackId)
        if (!feedback) {
            res.status(404).json({
                status: "failed",
                message: 'feedback not found',
            })
        }
        res.status(200).json({
            status: "success",
            message: 'feedback found successfully',
            data: feedback
        })
    } catch (error) {
        next(error)
    }
}

export const getAllFeedback = async (req, res, next) => {
    try {
        const feedbacks = await FeedbackModel.find()
        if (!feedbacks) {
            res.status(404).json({
                status: "failed",
                message: 'No feedbacks available'
            })
        } else {
            res.status(200).json({
                status: "success",
                message: 'feedback found successfully',
                data: feedbacks
            })
        }
    } catch (error) {
        next(error)
    }
}


export const searchFeedback = async (req, res, next) => {
    const { search } = req.query;

    // Construct the query object based on provided parameters
    const queryObject = {};

    if (search) {
        queryObject.blogTitle = { $regex: search, $options: "i" };
    }

    try {
        // Find jobs based on the constructed query object
        const searchResult = await BlogsModel.find(queryObject).limit(10);

        console.log(searchResult);

        if (searchResult.length > 0) {
            // Check if searchResult contains any data
            res.status(200).json({
                message: "Blogs found",
                data: searchResult,
            });
        } else {
            res.status(404).json({
                // Change status code to 404 for "Not Found"
                message: "Blogs not found",
                status: "failed",
            });
        }
    } catch (error) {
        // console.error("Error searching jobs:", error);
        next(error)
    }
};

export const sendEmailToUser = async (subject, message, sendTo) => {
    try {
        // const toEmail = req.body.toEmail;
        // const name = req.body.name;
        // const subject = subject;
        // const text = req.body.text;

        // Log to check if email is received in the request body
        // console.log("Email to send to:", toEmail);

        if (!toEmail) {
            throw createError(400, "Recipient email not provided");
        }

        let transporter = nodemailer.createTransport({
            service: "Gmail",
            secure: true,
            port: 465,
            auth: {
                user: process.env.FOUNDER_EMAIL, // Sender's email address
                pass: process.env.FOUNDER_PASS, // Sender's email password
            },
        });

        let info = await transporter.sendMail({
            from: process.env.FOUNDER_EMAIL, // Sender's email address
            to: sendTo, // Receiver's email address
            subject, // Email subject
            text: ` ${message}`, // Email body
        });

        // console.log("Message sent: %s", info.messageId);
        res.status(200).json({
            status: "Success",
            message: "Email Sent Successfully",
        });
    } catch (error) {
        console.error("Error sending email:", error);
        next(createError(error.status || 500, error.message));
    }
};

export const sendEmailToAdmin = async (subject, message, sendBy) => {
    try {
        // const toEmail = req.body.toEmail;
        // const name = req.body.name;
        // const subject = subject;
        // const text = req.body.text;

        // Log to check if email is received in the request body
        // console.log("Email to send to:", toEmail);

        if (!toEmail) {
            throw createError(400, "Recipient email not provided");
        }

        let transporter = nodemailer.createTransport({
            service: "Gmail",
            secure: true,
            port: 465,
            auth: {
                user: process.env.FOUNDER_EMAIL, // Sender's email address
                pass: process.env.FOUNDER_PASS, // Sender's email password
            },
        });

        let info = await transporter.sendMail({
            from: process.env.FOUNDER_EMAIL, // Sender's email address
            to: sendTo, // Receiver's email address
            subject, // Email subject
            text: ` ${message}`, // Email body
        });

        // console.log("Message sent: %s", info.messageId);
        res.status(200).json({
            status: "Success",
            message: "Email Sent Successfully",
        });
    } catch (error) {
        console.error("Error sending email:", error);
        next(createError(error.status || 500, error.message));
    }
};