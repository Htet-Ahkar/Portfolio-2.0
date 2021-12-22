import * as api from "../api";

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
export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects();

    dispatch({ type: FETCH_ALL_PROJECTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProject = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProject(id);

    dispatch({ type: FETCH_PROJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteProject(id);

    dispatch({ type: DELETE_PROJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createProject = (project) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);

    dispatch({ type: CREATE_PROJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, project);

    dispatch({ type: UPDATE_PROJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const increaseViewCount = (id) => async (dispatch) => {
  try {
    const { data } = await api.increaseProjectViewCount(id);

    dispatch({ type: UPDATE_PROJECT, payload: data });
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
