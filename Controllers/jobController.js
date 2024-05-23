import JobsModel from "../Models/JobsModel.js"


export const createJob = async (req, res, next) => {
    try {
        const createJob = await new JobsModel(
            {
                ...req.body
            }
        )

        const saveJob = await createJob.save()

        res.status(200).json({
            status: "success",
            message: 'Job created successfully',
            data: saveJob
        })
    } catch (error) {
        // createError(error.status, error.message)
        next(error)
    }
}

export const updateJob = async (req, res, next) => {
    try {
        const jobId = req.params.jobId

        const updateJob = await JobsModel.findByIdAndUpdate(jobId, { $set: req.body }, { new: true })

        res.status(200).json({
            status: "success",
            message: 'Job updated successfully',
            data: updateJob
        })
    } catch (error) {
        next(error)
    }
}

export const deleteJob = async (req, res, next) => {
    try {
        const jobId = req.params.jobId
        const job = await JobsModel.findById(jobId)
        if (job) {
            await JobsModel.findByIdAndDelete(jobId)
            res.status(200).json({
                status: "success",
                message: 'Job deleted successfully',
            })
        } else {
            res.status(404).json({
                status: "failed",
                message: 'Job not found',
            })
        }
    } catch (error) {
        next(error)
    }
}

export const getSingleJob = async (req, res, next) => {
    try {
        const jobId = req.params.jobId
        const job = await JobsModel.findById(jobId)
        if (!job) {
            res.status(404).json({
                status: "failed",
                message: 'job not found',
            })
        }
        res.status(200).json({
            status: "success",
            message: 'Job found successfully',
            data: job
        })
    } catch (error) {
        next(error)
    }
}

export const getAllJob = async (req, res, next) => {
    try {
        const jobs = await JobsModel.find()
        if (!jobs) {
            res.status(404).json({
                status: "failed",
                message: 'No jobs available'
            })
        } else {
            res.status(200).json({
                status: "success",
                message: 'Jobs found successfully',
                data: jobs
            })
        }
    } catch (error) {
        next(error)
    }
}


export const searchJob = async (req, res, next) => {
    const { jobTitle, keywords, company } = req.query;

    // Construct the query object based on provided parameters
    const queryObject = {};

    if (jobTitle) {
        queryObject.jobTitle = { $regex: jobTitle, $options: "i" };
    }

    if (keywords) {
        queryObject.keywords = { $regex: keywords, $options: "i" };
    }

    if (company) {
        queryObject.companyName = { $regex: company, $options: "i" };
    }

    try {
        // Find jobs based on the constructed query object
        const searchResult = await JobsModel.find(queryObject).limit(10);

        console.log(searchResult);

        if (searchResult.length > 0) {
            // Check if searchResult contains any data
            res.status(200).json({
                message: "Jobs found",
                data: searchResult,
            });
        } else {
            res.status(404).json({
                // Change status code to 404 for "Not Found"
                message: "Jobs not found",
                status: "failed",
            });
        }
    } catch (error) {
        // console.error("Error searching jobs:", error);
        next(error)
    }
};