import BlogsModel from "../Models/BlogsModel.js"


export const createBlog = async (req, res, next) => {
    try {
        const createBlog = await new BlogsModel(
            {
                ...req.body
            }
        )

        const saveBlog = await createBlog.save()

        res.status(200).json({
            status: "success",
            message: 'Blog created successfully',
            data: saveBlog
        })
    } catch (error) {
        // createError(error.status, error.message)
        next(error)
    }
}

export const updateBlog = async (req, res, next) => {
    try {
        const blogId = req.params.blogId

        const updateBlog = await BlogsModel.findByIdAndUpdate(blogId, { $set: req.body }, { new: true })

        res.status(200).json({
            status: "success",
            message: 'Blog updated successfully',
            data: updateBlog
        })
    } catch (error) {
        next(error)
    }
}

export const deleteBlog = async (req, res, next) => {
    try {
        const blogId = req.params.blogId
        const blog = await BlogsModel.findById(blogId)
        if (blog) {
            await BlogsModel.findByIdAndDelete(blogId)
            res.status(200).json({
                status: "success",
                message: 'Blog deleted successfully',
            })
        } else {
            res.status(404).json({
                status: "failed",
                message: 'Blog not found',
            })
        }
    } catch (error) {
        next(error)
    }
}

export const getSingleBlog = async (req, res, next) => {
    try {
        const blogId = req.params.blogId
        const blog = await BlogsModel.findById(blogId)
        if (!blog) {
            res.status(404).json({
                status: "failed",
                message: 'Blog not found',
            })
        }
        res.status(200).json({
            status: "success",
            message: 'Blog found successfully',
            data: blog
        })
    } catch (error) {
        next(error)
    }
}

export const getAllBlog = async (req, res, next) => {
    try {
        const blogs = await BlogsModel.find()
        if (!blogs) {
            res.status(404).json({
                status: "failed",
                message: 'No blogs available'
            })
        } else {
            res.status(200).json({
                status: "success",
                message: 'Blogs found successfully',
                data: blogs
            })
        }
    } catch (error) {
        next(error)
    }
}


export const searchBlog = async (req, res, next) => {
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