import { useEffect, useState } from "react";

// Dependencies
import axios from "axios";
import FileBase from "react-file-base64";
//Redux
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { clearForm } from "../actions/projects";

const ProjectForm = () => {
  const dispatch = useDispatch();
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    liveURL: "",
    codeURL: "",
    stacks: [],
    selectedFiles: [],
  });
  const defaultState = {
    name: "",
    description: "",
    liveURL: "",
    codeURL: "",
    stacks: [],
    selectedFiles: [],
  };
  // Get Redux projects
  const project = useSelector((state: RootStateOrAny) => state.project);

  // Create Project
  const createProject = async (data) => {
    await axios.post(`/api/projects`, data);
  };

  // Update Project
  const updateProject = async (id, data) => {
    await axios.put(`/api/projects/${id}`, data);
  };

  // Get Projects
  useEffect(() => {
    setProjectData(project == "default" ? projectData : project);
  }, [project]);

  //Clear
  const clear = (e) => {
    e.preventDefault();
    setProjectData(defaultState);
    dispatch(clearForm());
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    project == "default"
      ? createProject(projectData)
      : updateProject(project._id, projectData);

    setProjectData(defaultState);
    dispatch(clearForm());
  };

  return (
    <div
      className="bg-gray-300 w-full rounded-lg px-2.5 py-5 dark:bg-dark-bg dark:border-2 dark:border-dark-secondary
    lg:w-3/6"
    >
      {/* Form */}
      <form
        className="relative"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        {/* Inputs */}
        <input
          className="mb-2 w-full h-12 bg-primary text-primaryText rounded-lg px-3.5 focus:scale-105 dark:bg-dark-primary dark:text-dark-primaryText"
          type="text"
          name="name"
          aria-label="Name"
          placeholder="Name"
          value={projectData.name}
          onChange={(e) => {
            setProjectData({ ...projectData, name: e.target.value });
          }}
        />
        <input
          className="mb-2 w-full h-12 bg-primary text-primaryText rounded-lg px-3.5 focus:scale-105 dark:bg-dark-primary dark:text-dark-primaryText"
          type="description"
          name="snippet"
          aria-label="Description"
          placeholder="Description"
          value={projectData.description}
          onChange={(e) => {
            setProjectData({ ...projectData, description: e.target.value });
          }}
        />
        <input
          className="mb-2 w-full h-12 bg-primary text-primaryText rounded-lg px-3.5 focus:scale-105 dark:bg-dark-primary dark:text-dark-primaryText"
          type="text"
          name="stacks"
          aria-label="Stacks"
          placeholder="Stacks"
          value={projectData.stacks}
          onChange={(e) => {
            setProjectData({
              ...projectData,
              stacks: e.target.value.split(","),
            });
          }}
        />
        <input
          className="mb-2 w-full h-12 bg-primary text-primaryText rounded-lg px-3.5 focus:scale-105 dark:bg-dark-primary dark:text-dark-primaryText"
          type="text"
          name="loveURL"
          aria-label="LiveURL"
          placeholder="LiveURL"
          value={projectData.liveURL}
          onChange={(e) => {
            setProjectData({ ...projectData, liveURL: e.target.value });
          }}
        />
        <input
          className="mb-2 w-full h-12 bg-primary text-primaryText rounded-lg px-3.5 focus:scale-105 dark:bg-dark-primary dark:text-dark-primaryText"
          type="text"
          name="codeURL"
          aria-label="CodeURL"
          placeholder="CodeURL"
          value={projectData.codeURL}
          onChange={(e) => {
            setProjectData({ ...projectData, codeURL: e.target.value });
          }}
        />
        {/* Photos */}
        <div className={`my-2 h-5 flex gap-2 justify-start items-center`}>
          {projectData.selectedFiles.length > 0 &&
            projectData.selectedFiles.map((file, index) => (
              <div
                key={index}
                className="text-center h-full bg-primary text-primaryText rounded-full w-5 cursor-pointer
                dark:bg-dark-primary dark:text-dark-primaryText"
                /**
                 * todo: Update Interface debugg
                 */
                onClick={() => {
                  //blogData.selectedFiles.splice(index, 1);
                  setProjectData({
                    ...projectData,
                    selectedFiles: projectData.selectedFiles.splice(index, 1),
                  });
                }}
              >
                {index + 1}
              </div>
            ))}
        </div>
        <div className="mb-2">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setProjectData({
                ...projectData,
                selectedFiles: [...projectData.selectedFiles, base64],
              });
            }}
          />
        </div>
        <span className="mb-2 block text-success">
          Successfully Submited
          <br />
        </span>
        {/* Buttons */}
        <button
          type="submit"
          className="h-12 w-36 bg-primary text-primaryText rounded-3xl cursor-pointer hover:scale-105 focus:scale-95 dark:border-2"
        >
          Submit
        </button>
        <button
          onClick={clear}
          className="h-12 w-36 bg-primary text-primaryText rounded-3xl cursor-pointer hover:scale-105 focus:scale-95 absolute right-0 dark:border-2"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
