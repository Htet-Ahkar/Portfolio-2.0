import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";

const Blogs = () => {
  const blogs = useSelector((state: RootStateOrAny) => state.blogs);
  console.log(blogs);

  return <div>Blogs</div>;
};

export default Blogs;
