import React, { useEffect } from "react";
//Redux
import { useDispatch } from "react-redux";
//Action
import { getBlogs } from "../actions/blogs";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>body</h1>
    </div>
  );
}
