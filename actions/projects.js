//ACTIONS_TYPES
import {
  FETCH_ALL_PROJECTS,
  FETCH_PROJECT,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  CLEAR,
} from "../constants/actiion_types";

//Action Creator
export const getProjects = (data) => (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_PROJECTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProject = (data) => (dispatch) => {
  try {
    dispatch({ type: FETCH_PROJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (data) => (dispatch) => {
  try {
    dispatch({ type: DELETE_PROJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createProject = (data) => (dispatch) => {
  try {
    dispatch({ type: CREATE_PROJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = (data) => (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROJECT, payload: data });
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
