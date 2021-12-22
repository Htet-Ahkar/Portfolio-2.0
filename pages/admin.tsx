import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

//Components
import { BlogForm, Blogs, ProjectForm, Projects } from "../components";

function admin() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBlogs, setIsBlogs] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      //Admin State
      if (json.admin) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      //Redirect
      if (router.pathname === "/admin" && !json.admin)
        router.replace("./login");
    } else {
      if (router.pathname === "/admin") router.replace("./login");
    }
  }, []);

  return (
    isAdmin && (
      <div className="flex flex-col items-center justify-start min-h-screen bg-bg dark:bg-dark-bg text-secondaryText dark:text-dark-secondaryText px-2">
        <div className="w-full flex justify-end items-center my-5">
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
    )
  );
}

export default admin;
