import React, { useState } from "react";

// Next Auth
import { getSession } from "next-auth/react";

//Components
import { BlogForm, Blogs, ProjectForm, Projects } from "../components";

function admin() {
  const [isBlogs, setIsBlogs] = useState(true);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-bg dark:bg-dark-bg text-secondaryText dark:text-dark-secondaryText px-2">
      <div
        className={`w-full flex items-center my-5 ${
          isBlogs ? `justify-between` : `justify-end`
        }`}
      >
        {/* Seperator */}
        {isBlogs && (
          <div className="bg-primary dark:bg-dark-primary rounded-md p-2 px-3">{`<br/>`}</div>
        )}
        {/* Btn */}
        <div
          className="relative w-48 h-12 bg-gray-300 rounded-full
          dark:bg-gray-800
          "
        >
          <button
            onClick={() => {
              setIsBlogs(!isBlogs);
            }}
            className={`transition-all duration-500 ease-in-out w-24 h-12 text-primaryText bg-primary rounded-full text-lg absolute ${
              isBlogs == false && `translate-x-24`
            }
              dark:bg-dark-primary dark:text-dark-primaryText
              `}
          >
            {isBlogs ? `Blogs` : `Projects`}
          </button>
        </div>
      </div>
      {/* Container */}
      {isBlogs ? (
        <div className="w-full lg:flex lg:flex-row-reverse lg:gap-5">
          {/* Form */}
          <BlogForm />
          {/* Blogs */}
          <Blogs />
        </div>
      ) : (
        <div className="w-full lg:flex lg:flex-row-reverse lg:gap-5">
          {/* ProjectForm */}
          <ProjectForm />
          {/* Projects */}
          <Projects />
        </div>
      )}
    </div>
  );
}

export default admin;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}
