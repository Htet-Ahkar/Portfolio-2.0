//API
import * as api from "../api";

// Components
import { ProjectCard } from "../components";

const projects = ({ projects }) => {
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
        {projects.length > 0
          ? projects.map((project) => (
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

export async function getServerSideProps() {
  const { data } = await api.fetchProjects();

  return {
    props: {
      projects: data.reverse(),
    },
  };
}
