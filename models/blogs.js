import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    snippet: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
    categories: [String],
    viewCount: {
      type: Number,
      default: 0,
    },
    selectedFiles: [String],
  },
  { timestamps: true }
);

var Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
