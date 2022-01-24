//Dependencies
import axios from "axios";

// Components
import { ProjectCard } from "../components";

const projects = ({ data }) => {
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
          : `Sorry!!! There's Nothing to Show!!!`}
      </div>
    </div>
  );
};

export default projects;

export async function getStaticProps() {
  const {
    data: { data },
  } = await axios.get("https://portfolio-client-pink.vercel.app/api/projects");

  return {
    props: {
      data,
    },
    revalidate: 600, // In seconds
  };
}
