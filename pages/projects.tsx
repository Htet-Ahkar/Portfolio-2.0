// Components
import { useEffect } from "react";
import { ProjectCard } from "../components";

//Redux
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
//Actions
import { getProjects } from "../actions/projects";

const projects = () => {
  const dispatch = useDispatch();
  //Get Projects
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  const projectsData = useSelector((state: RootStateOrAny) => state.projects);

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
        {projectsData.length > 0
          ? projectsData.map((project) => (
              <div
                className="flex justify-center items-center"
                key={project._id}
              >
                <ProjectCard project={project} />
              </div>
            ))
          : `Sorry, Nothing to show!!!`}
      </div>
    </div>
  );
};

export default projects;
