import { useRouter } from "next/router";
import { useEffect } from "react";
import jwt from "jsonwebtoken";

//Components
import { BlogForm, Blogs } from "../components";

function admin() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      if (router.pathname === "/admin" && !json.admin) router.push("./login");
    } else {
      if (router.pathname === "/admin") router.push("./login");
    }
  }, []);

  return (
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
  );
}

export default admin;
