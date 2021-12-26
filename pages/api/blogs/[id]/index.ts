import dbConnect from "../../../../utils/dbConnect";
import Blog from "../../../../models/blogs";

// Connect database
dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const data = await Blog.findById(id);

        if (!data) {
          res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const data = await Blog.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!data) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedBlog = await Blog.deleteOne({ _id: id });

        if (!deletedBlog) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
