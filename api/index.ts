import axios from "axios";

const url = process.env.NEXT_PUBLIC_BACKEND;

//Blogs
export const fetchBlogs = () => axios.get(url);
export const fetchBlog = (id) => axios.get(`${url}/${id}`);
export const deleteBlog = (id) => axios.delete(`${url}/${id}`);
export const createBlogs = (newBlog) => axios.post(url, newBlog);
export const updateBlog = (id, updatedBlog) =>
  axios.patch(`${url}/${id}`, updatedBlog);
export const increaseViewCount = (id) => axios.patch(`${url}/${id}/viewCount`);
