import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";

//Redux
import { useDispatch } from "react-redux";
import { createBlog } from "../actions/blogs";

const blogForm = () => {
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState({
    title: "",
    snippet: "",
    body: "",
    categories: [],
    selectedFiles: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createBlog(blogData));
  };

  const clear = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-300 w-full rounded-lg px-2.5 py-5 dark:bg-dark-bg dark:border-2 dark:border-dark-secondary">
      {/* Form */}
      <form
        className="relative"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        {/* Inputs */}
        <input
          className="mb-2 w-full h-12 bg-primary text-primaryText rounded-lg px-3.5 focus:scale-105 dark:bg-dark-primary dark:text-dark-primaryText"
          type="text"
          name="title"
          aria-label="Title"
          placeholder="Title"
          value={blogData.title}
          onChange={(e) => {
            setBlogData({ ...blogData, title: e.target.value });
          }}
        />
        <input
          className="mb-2 w-full h-12 bg-primary text-primaryText rounded-lg px-3.5 focus:scale-105 dark:bg-dark-primary dark:text-dark-primaryText"
          type="text"
          name="snippet"
          aria-label="Snippet"
          placeholder="Snippet"
          value={blogData.snippet}
          onChange={(e) => {
            setBlogData({ ...blogData, snippet: e.target.value });
          }}
        />
        <input
          className="mb-2 w-full h-12 bg-primary text-primaryText rounded-lg px-3.5 focus:scale-105 dark:bg-dark-primary dark:text-dark-primaryText"
          type="text"
          name="categories"
          aria-label="Categories"
          placeholder="Categories"
          value={blogData.categories}
          onChange={(e) => {
            setBlogData({ ...blogData, categories: e.target.value.split(",") });
          }}
        />
        <textarea
          className="mb-2 w-full h-48 bg-primary text-primaryText rounded-lg px-3.5 py-2 focus:scale-105 dark:bg-dark-primary dark:text-dark-primaryText"
          name="body"
          aria-label="Body"
          placeholder="Body"
          value={blogData.body}
          onChange={(e) => {
            setBlogData({ ...blogData, body: e.target.value });
          }}
        />
        <div className="mb-2">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setBlogData({
                ...blogData,
                selectedFiles: [...blogData.selectedFiles, base64],
              });
            }}
          />
        </div>
        <span className="mb-2 block text-success">
          Successfully Submited
          <br />
        </span>
        <button
          type="submit"
          className="h-12 w-36 bg-primary text-primaryText rounded-3xl cursor-pointer hover:scale-105 focus:scale-95 dark:border-2"
        >
          Submit
        </button>
        <button
          onClick={clear}
          className="h-12 w-36 bg-primary text-primaryText rounded-3xl cursor-pointer hover:scale-105 focus:scale-95 absolute right-0 dark:border-2"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default blogForm;
