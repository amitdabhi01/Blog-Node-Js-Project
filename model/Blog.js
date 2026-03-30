import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    mediaUrl: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
  },
  { timestamps: true },
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
