import { useEffect, useState } from "react";
//Dependencies
import axios from "axios";

// Components
import { ProjectCard } from "../components";

const projects = () => {
  // FetchData
  const [data, setData] = useState([]);
  const fetchBlogs = async () => {
    const {
      data: { data },
    } = await axios.get("/api/projects");
    setData(data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center bg-bg text-secondaryText p-5
    md:px-12
    dark:bg-reading dark:text-dark-secondaryText"
    >
      <div
        className="w-full h-full grid grid-cols-1 gap-5
      md:grid-cols-2
      lg:grid-cols-3"
      >
        {data.length > 0
          ? data.map((project) => (
              <div
                className="flex justify-center items-center"
                key={project._id}
              >
                <ProjectCard project={project} />
              </div>
            ))
          : `Loading...`}
      </div>
    </div>
  );
};

export default projects;
