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
    case "PUT":
      try {
        const blog = await Blog.findById(id);

        if (!blog) {
          return res.status(400).json({ success: false });
        }

        const UpdatedBlog = await Blog.findByIdAndUpdate(
          id,
          { viewCount: blog.viewCount + 1 },
          { new: true }
        );

        res.status(200).json({ success: true, UpdatedBlog });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
