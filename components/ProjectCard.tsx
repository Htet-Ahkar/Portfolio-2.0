type projectDataProps = {
  project: {
    _id: number;
    name: string;
    description: string;
    liveURL: string;
    codeURL: string;
    stacks: any[any];
    viewCount: number;
    selectedFiles: any[any];
    createdAt: string;
  };
};

//Dependencies
import moment from "moment";
import axios from "axios";

//Components
import { ProjectCardCarousel } from ".";

const ProjectCard = ({ project }: projectDataProps) => {
  //Increase ViewCounts
  const increaseView = async (id) => {
    await axios.put(`/api/projects/${id}/viewCount`);
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center gap-5
      bg-bg p-5 rounded-tl-3xl rounded-br-3xl border-t-4 border-b-4 border-black shadow-md text-secondaryText
      dark:shadow-none dark:border-white dark:bg-reading dark:border-l dark:border-r dark:text-dark-secondaryText
      "
    >
      {/* Image */}

      <div className="h-52 w-full flex justify-center items-center">
        {project.selectedFiles.length > 0 ? (
          <ProjectCardCarousel
            files={project.selectedFiles}
            name={project.name}
          />
        ) : (
          `Sorry!! There's no Feature Image`
        )}
      </div>

      {/* Name */}
      <h1 className="text-xl font-bold text-center">{project.name}</h1>
      {/* Description */}
      <p
        className="text-base text-gray-900
      dark:text-gray-200
      "
      >
        {project.description}
      </p>
      {/* Stacks */}
      <div className="w-full flex justify-start items-center gap-2 flex-wrap">
        {project.stacks.length > 0 &&
          project.stacks.map((stack) => (
            <div
              className="bg-primary text-primaryText rounded-lg p-1 px-3 text-sm
              dark:bg-dark-primary dark:text-dark-primaryText
              "
              key={stack}
            >
              {stack}
            </div>
          ))}
      </div>
      {/* Date and Views */}
      <div
        className="w-full flex text-sm text-gray-700
      dark:text-gray-300"
      >
        <div className="w-1/2 flex justify-center items-center">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="fill-primary
                    dark:fill-dark-primary"
            >
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            {moment(project.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="fill-primary
                    dark:fill-dark-primary"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
            {project.viewCount}
          </span>
        </div>
      </div>
      {/* Live and Code Url */}
      <div className="w-full flex justify-center items-center">
        {project.liveURL !== "" && (
          <div className="w-1/2 flex justify-center items-center">
            <a
              href={project.liveURL}
              target="_blank"
              className="bg-primary p-2 px-5 rounded-sm rounded-br-xl rounded-tl-xl
            transition-all duration-500 hover:scale-105 focus:scale-95
            dark:bg-dark-primary
            "
              onClick={() => {
                increaseView(project._id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="fill-white
              dark:fill-black"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
              </svg>
            </a>
          </div>
        )}
        <div className="w-1/2 flex justify-center items-center">
          <a
            href={project.codeURL}
            target="_blank"
            className="bg-primary p-2 px-5 rounded-sm rounded-br-xl rounded-tl-xl
            transition-all duration-500 hover:scale-105 focus:scale-95
          dark:bg-dark-primary"
            onClick={() => {
              increaseView(project._id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="fill-white
              dark:fill-black"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
