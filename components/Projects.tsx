import { useEffect } from "react";
import Link from "next/link";

//Dependencies
import axios from "axios";

//Redux
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
//Actions
import { getProjects, getProject, deleteProject } from "../actions/projects";

const Projects = () => {
  const dispatch = useDispatch();

  // FetchData
  const fetchProjects = async () => {
    const {
      data: { data },
    } = await axios.get("/api/projects");
    dispatch(getProjects(data));
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  // Get Redux State projects
  const projects = useSelector((state: RootStateOrAny) => state.projects);

  //Update UI
  useEffect(() => {
    fetchProjects();
  }, [projects]);

  // Get Project
  const getProjectInComponent = async (id) => {
    const {
      data: { data },
    } = await axios.get(`/api/projects/${id}`);
    //Update Redux projects
    dispatch(getProject(data));
  };

  // Delete Projects
  const deleteProjectInComponent = async (id) => {
    const {
      data: { data },
    } = await axios.delete(`/api/projects/${id}`);
    //Update Redux projects
    dispatch(deleteProject(data));
  };

  return (
    <div
      className="w-full flex flex-col justify-start items-start py-5 my-5 border-y-2 border-black bg-bg text-secondaryText
    lg:w-3/6 lg:overflow-y-scroll lg:max-h-96
    dark:bg-dark-bg dark:text-dark-secondaryText dark:border-dark-primary"
    >
      {projects.length > 0
        ? projects.map((project) => (
            <div
              key={project._id}
              className="w-full flex justify-between py-2 border-black border-b  hover:border-b-4
              dark:border-dark-primary"
            >
              {/* Text */}
              <div
                className="truncate mr-5
              dark:text-dark-secondaryText"
              >
                <Link href={`/projects`}>
                  <h1 className="text-2xl font-bold select-none cursor-pointer">
                    {project.name}
                  </h1>
                </Link>
                <p className="text-lg">{project.description}</p>
                <span className="text-error">
                  {project.viewCount == 0
                    ? `There is no viewer.`
                    : `${project.viewCount} ${
                        project.viewCount > 1 ? `views` : `view`
                      }`}
                </span>
              </div>
              {/* Buttons */}
              <div className="flex flex-col gap-2 ">
                {/* Get single project */}
                <button
                  onClick={() => {
                    getProjectInComponent(project._id);
                  }}
                  className="font-semibold bg-success rounded-lg px-5 py-1 hover:scale-105 focus:scale-95 hover:opacity-95"
                >
                  Edit
                </button>
                <button
                  //Delete Project
                  onClick={() => {
                    deleteProjectInComponent(project._id);
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

export default Projects;
