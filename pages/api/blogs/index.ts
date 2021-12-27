import { getSession } from "next-auth/react";
import dbConnect from "../../../utils/dbConnect";
import Blog from "../../../models/blogs";

//Connect to database
dbConnect();

export default async (req, res) => {
  const { method } = req;

  const session = await getSession({ req });

  switch (method) {
    case "GET":
      try {
        const data = await Blog.find();
        res.status(200).json({ success: true, data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      if (!session) {
        res.status(401).json({ error: "Unauthenticated User" });
      } else {
        try {
          const data = await Blog.create(req.body);

          res.status(201).json({ success: true, data });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
