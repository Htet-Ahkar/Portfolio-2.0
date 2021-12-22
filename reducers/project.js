//ACTION_TYPES
import { FETCH_PROJECT, CLEAR } from "../constants/actiion_types";

export default (project = ["default"], action) => {
  switch (action.type) {
    case FETCH_PROJECT:
      return action.payload;
    case CLEAR:
      return action.payload;
    default:
      return project;
  }
};
