import { useEffect, useState } from "react";
// Dependencies
import axios from "axios";
import FileBase from "react-file-base64";

//Redux
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { clearForm } from "../actions/blogs";

const blogForm = () => {
  const dispatch = useDispatch();
  const [isSuccess, setisSuccess] = useState(null);
  const [blogData, setBlogData] = useState({
    title: "",
    snippet: "",
    body: "",
    categories: [],
    selectedFiles: [],
  });
  const defaultState = {
    title: "",
    snippet: "",
    body: "",
    categories: [],
    selectedFiles: [],
  };

  // Get Redux blog
  const blog = useSelector((state: RootStateOrAny) => state.blog);

  // Create Blog
  const createBlog = async (data) => {
    const {
      data: { success },
    } = await axios.post(`/api/blogs`, data);

    setisSuccess(success);
  };

  // Update Blog
  const updatedBlog = async (id, data) => {
    const {
      data: { success },
    } = await axios.put(`/api/blogs/${id}`, data);

    setisSuccess(success);
  };

  // Get Blog
  useEffect(() => {
    setBlogData(blog == "default" ? blogData : blog);
  }, [blog]);

  //Clear
  const clear = (e) => {
    e.preventDefault();
    setBlogData(defaultState);
    dispatch(clearForm());
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    blog == "default" ? createBlog(blogData) : updatedBlog(blog._id, blogData);

    setBlogData(defaultState);
    dispatch(clearForm());

    setTimeout(() => {
      setisSuccess(null);
    }, 5000);
  };

  return (
    <div
      className="bg-gray-300 w-full rounded-lg px-2.5 py-5 dark:bg-dark-bg dark:border-2 dark:border-dark-secondary
    lg:w-3/6"
    >
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
        {/* Photos */}
        <div className={`my-2 h-5 flex gap-2 justify-start items-center`}>
          {blogData.selectedFiles.length > 0 &&
            blogData.selectedFiles.map((file, index) => (
              <div
                key={index}
                className="text-center h-full bg-primary text-primaryText rounded-full w-5 cursor-pointer
                dark:bg-dark-primary dark:text-dark-primaryText"
                /**
                 * todo: Update Interface debugg
                 */
                onClick={() => {
                  //blogData.selectedFiles.splice(index, 1);
                  setBlogData({
                    ...blogData,
                    selectedFiles: blogData.selectedFiles.splice(index, 1),
                  });
                }}
              >
                {index + 1}
              </div>
            ))}
        </div>
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
          {isSuccess !== null &&
            `${
              isSuccess ? `Successfully Submited` : `There's something wrong.`
            }`}
          <br />
        </span>
        {/* Buttons */}
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
