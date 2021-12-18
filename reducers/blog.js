export default (blog = ["default"], action) => {
  switch (action.type) {
    case "FETCH_BLOG":
      return action.payload;
    default:
      return blog;
  }
};
