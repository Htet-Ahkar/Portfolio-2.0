import { combineReducers } from "redux";

import blogs from "./blogs";
import blog from "./blog";
import projects from "./projects";
import project from "./project";

export default combineReducers({
  blogs,
  blog,
  projects,
  project,
});
