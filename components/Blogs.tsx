import Link from "next/link";
import React, { useEffect } from "react";

//Redux
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { deleteblog, getBlog, getBlogs } from "../actions/blogs";

const Blogs = () => {
  //Get Blogs
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const blogs = useSelector((state: RootStateOrAny) => state.blogs);

  return (
    <div
      className="w-full flex flex-col justify-start items-start py-5 my-5 border-y-2 border-black bg-bg text-secondaryText
    lg:w-3/6 lg:overflow-y-scroll lg:max-h-96
    dark:bg-dark-bg dark:text-dark-secondaryText dark:border-dark-primary"
    >
      {blogs.length > 0
        ? blogs.map((blog) => (
            <div
              key={blog._id}
              className="w-full flex justify-between py-2 border-black border-b  hover:border-b-4
              dark:border-dark-primary"
            >
              {/* Text */}
              <div
                className="truncate mr-5
              dark:text-dark-secondaryText"
              >
                <Link href={`/blogs/${blog._id}`}>
                  <h1 className="text-2xl font-bold select-none cursor-pointer">
                    {blog.title}
                  </h1>
                </Link>
                <p className="text-lg">{blog.snippet}</p>
                <span className="text-error">
                  {blog.viewCount == 0
                    ? `There is no viewer.`
                    : `${blog.viewCount} ${
                        blog.viewCount > 1 ? `views` : `view`
                      }`}
                </span>
              </div>
              {/* Buttons */}
              <div className="flex flex-col gap-2 ">
                {/* Get single blog */}
                <button
                  onClick={() => {
                    dispatch(getBlog(blog._id));
                  }}
                  className="font-semibold bg-success rounded-lg px-5 py-1 hover:scale-105 focus:scale-95 hover:opacity-95"
                >
                  Edit
                </button>
                <button
                  //Delete Blog
                  onClick={() => {
                    dispatch(deleteblog(blog._id));
                    dispatch(getBlogs());
                  }}
                  className="font-semibold bg-error rounded-lg px-5 py-1 hover:scale-105 focus:scale-95 hover:opacity-95"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        : `No Post Here!!`}
    </div>
  );
};

export default Blogs;
