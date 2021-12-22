//ACTION_TYPES
import {
  FETCH_ALL_PROJECTS,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
} from "../constants/actiion_types";

export default (projects = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PROJECTS:
      return action.payload;
    case CREATE_PROJECT:
      return [...projects, action.payload];
    case UPDATE_PROJECT:
      return projects.map((blog) =>
        blog._id === action.payload._id ? action.payload : blog
      );
    case DELETE_PROJECT:
      return projects.filter((blog) => blog._id !== action.payload._id);
    default:
      return projects;
  }
};
