import axios from "axios";

const url = process.env.NEXT_PUBLIC_BACKEND;

//Blogs
const blogURL = `${url}/blogs`;
export const fetchBlogs = () => axios.get(blogURL);
export const fetchBlog = (id) => axios.get(`${blogURL}/${id}`);
export const deleteBlog = (id) => axios.delete(`${blogURL}/${id}`);
export const createBlogs = (newBlog) => axios.post(blogURL, newBlog);
export const updateBlog = (id, updatedBlog) =>
  axios.patch(`${blogURL}/${id}`, updatedBlog);
export const increaseViewCount = (id) =>
  axios.patch(`${blogURL}/${id}/viewCount`);

//Projects
const projectsURL = `${url}/projects`;
export const fetchProjects = () => axios.get(projectsURL);
export const fetchProject = (id) => axios.get(`${projectsURL}/${id}`);
export const deleteProject = (id) => axios.delete(`${projectsURL}/${id}`);
export const createProject = (newProject) =>
  axios.post(projectsURL, newProject);
export const updateProject = (id, updatedProject) =>
  axios.patch(`${projectsURL}/${id}`, updatedProject);
export const increaseProjectViewCount = (id) =>
  axios.patch(`${projectsURL}/${id}/viewCount`);
