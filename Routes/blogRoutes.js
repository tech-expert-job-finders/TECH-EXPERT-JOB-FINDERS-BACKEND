import express from "express"
import { createBlog, deleteBlog, getAllBlog, getSingleBlog, searchBlog, updateBlog } from "../Controllers/blogController.js"
const blogRoutes = express.Router()

// http://{domain-name}/api/blog/create
blogRoutes.post('/create', createBlog)

// http://{domain-name}/api/blog/:blogId
blogRoutes.put('/:blogId', updateBlog)

// http://{domain-name}/api/blog/:blogId
blogRoutes.delete('/:blogId', deleteBlog)

// http://{domain-name}/api/blog/:blogId
blogRoutes.get('/:blogId', getSingleBlog)

// http://{domain-name}/api/blog/
blogRoutes.get('/', getAllBlog)

// http://{domain-name}/api/blog/
blogRoutes.get('/find/query', searchBlog)


export default blogRoutes