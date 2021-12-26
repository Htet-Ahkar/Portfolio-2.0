import axios from "axios";

const url = "http://localhost:3000/";

//Blogs
const blogURL = `${url}/api/blogs`;
export const fetchBlogs = () => axios.get(blogURL);
export const fetchBlog = (id) => axios.get(`${blogURL}/${id}`);
export const deleteBlog = (id) => axios.delete(`${blogURL}/${id}`);
export const createBlogs = (newBlog) => axios.post(blogURL, newBlog);
export const updateBlog = (id, updatedBlog) =>
  axios.put(`${blogURL}/${id}`, updatedBlog);
export const increaseViewCount = (id) =>
  axios.put(`${blogURL}/${id}/viewCount`);

//Projects
const projectsURL = `${url}/api/projects`;
export const fetchProjects = () => axios.get(projectsURL);
export const fetchProject = (id) => axios.get(`${projectsURL}/${id}`);
export const deleteProject = (id) => axios.delete(`${projectsURL}/${id}`);
export const createProject = (newProject) =>
  axios.post(projectsURL, newProject);
export const updateProject = (id, updatedProject) =>
  axios.put(`${projectsURL}/${id}`, updatedProject);
export const increaseProjectViewCount = (id) =>
  axios.put(`${projectsURL}/${id}/viewCount`);
