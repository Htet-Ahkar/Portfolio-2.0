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
export const getBlogs = (data) => (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getBlog = (data) => (dispatch) => {
  try {
    dispatch({ type: FETCH_BLOG, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteblog = (data) => (dispatch) => {
  try {
    dispatch({ type: DELETE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createBlog = (data) => (dispatch) => {
  try {
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatedBlog = (data) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clearForm = () => (dispatch) => {
  try {
    dispatch({ type: CLEAR, payload: ["default"] });
  } catch (error) {
    console.log(error);
  }
};
