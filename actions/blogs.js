import * as api from "../api";
//ACTION_TYPES
import {
  FETCH_ALL,
  FETCH_BLOG,
  CREATE,
  UPDATE,
  DELETE,
  CLEAR,
} from "../constants/actiion_types";

//Action Creator
export const getBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogs();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getBlog = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchBlog(id);

    dispatch({ type: FETCH_BLOG, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteblog = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteBlog(id);

    dispatch({ type: DELETE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createBlog = (blog) => async (dispatch) => {
  try {
    const { data } = await api.createBlogs(blog);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatedBlog = (id, blog) => async (dispatch) => {
  try {
    const { data } = await api.updateBlog(id, blog);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const increaseViewCount = (id) => async (dispatch) => {
  try {
    const { data } = await api.increaseViewCount(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clearForm = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR, payload: ["default"] });
  } catch (error) {
    console.log(error);
  }
};
