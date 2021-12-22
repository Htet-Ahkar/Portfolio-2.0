//ACTION_TYPES
import { FETCH_BLOG, CLEAR } from "../constants/actiion_types";

export default (blog = ["default"], action) => {
  switch (action.type) {
    case FETCH_BLOG:
      return action.payload;
    case CLEAR:
      return action.payload;
    default:
      return blog;
  }
};
