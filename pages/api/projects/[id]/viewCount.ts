import dbConnect from "../../../../utils/dbConnect";
import Project from "../../../../models/projects";

// Connect database
dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "PUT":
      try {
        const project = await Project.findById(id);

        if (!project) {
          return res.status(400).json({ success: false });
        }

        const UpdatedProject = await Project.findByIdAndUpdate(
          id,
          { viewCount: project.viewCount + 1 },
          { new: true }
        );

        res.status(200).json({ success: true, UpdatedProject });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
