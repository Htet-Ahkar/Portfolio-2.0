import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

//Components
import { BlogForm, Blogs } from "../components";

function admin() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

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
      <div className="flex flex-col items-center justify-start min-h-screen bg-bg dark:bg-dark-bg text-secondaryText dark:text-dark-secondaryText px-5">
        <div>
          {/* Btn */}
          Btn
        </div>
        {/* Container */}
        <div className="w-full lg:flex lg:flex-row-reverse lg:gap-5">
          {/* Form */}

          <BlogForm />
          {/* Blogs */}
          <Blogs />
        </div>
      </div>
    )
  );
}

export default admin;
