import React, { useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";

//Redux
import { useDispatch } from "react-redux";
import { getBlogs } from "../actions/blogs";

const demoblogs = [
  { _id: 1, title: "blog", snippet: "blog snippet", viewCount: 0 },
  {
    _id: 2,
    title: "blog asdfasdfsadfsadfasdfsadfasdfsadfsadfsadfasdf",
    snippet: "blog snippet1asdffasdf asdf sadfasdfsadfasdf",
    viewCount: 100,
  },
  { _id: 3, title: "blog", snippet: "blog snippet2", viewCount: 1 },
  { _id: 6, title: "blog", snippet: "blog snippet5", viewCount: 100 },
  { _id: 5, title: "blog", snippet: "blog snippet4", viewCount: 100 },
  { _id: 4, title: "blog", snippet: "blog snippet3", viewCount: 100 },
  { _id: 7, title: "blog", snippet: "blog snippet6", viewCount: 100 },
  { _id: 8, title: "blog", snippet: "blog snippet7", viewCount: 100 },
  { _id: 9, title: "blog", snippet: "blog snippet8", viewCount: 100 },
];

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
    dark:bg-dark-bg "
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
                <h1 className="text-2xl font-bold ">{blog.title}</h1>
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
                <button className="font-semibold bg-success rounded-lg px-5 py-1 hover:scale-105 focus:scale-95 hover:opacity-95">
                  Edit
                </button>
                <button className="font-semibold bg-error rounded-lg px-5 py-1 hover:scale-105 focus:scale-95 hover:opacity-95">
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
