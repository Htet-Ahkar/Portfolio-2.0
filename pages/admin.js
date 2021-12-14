//Components
import { BlogForm, Blogs } from "../components";

function admin() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-bg dark:bg-dark-bg text-secondaryText dark:text-dark-secondaryText  px-5">
      <div>
        {/* Btn */}
        Btn
      </div>
      {/* Container */}
      <div className="w-full">
        {/* Form */}
        <BlogForm />
        {/* Blogs */}
        <Blogs />
      </div>
    </div>
  );
}

export default admin;
