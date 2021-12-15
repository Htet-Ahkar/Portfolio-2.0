import axios from "axios";

const url = process.env.NEXT_PUBLIC_BACKEND;

//Blogs
export const fetchBlogs = () => axios.get(url);
export const createBlogs = (newBlog) => axios.post(url, newBlog);
