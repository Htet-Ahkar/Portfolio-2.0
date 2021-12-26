import dbConnect from "../../../utils/dbConnect";
import Project from "../../../models/projects";

//Connect to database
dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await Project.find();
        res.status(200).json({ success: true, data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = await Project.create(req.body);

        res.status(201).json({ success: true, data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
