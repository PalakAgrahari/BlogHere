import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [10, "Blog Title must contain at least 10 characters"],
    maxLength: [60, "Blog Title cannot exceed 60 characters"],
  },
  mainImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  intro: {
    type: String,
    required: true,
    minLength: [20, "Blog Intro must contain at least 10 characters"],
  },
  paraOneImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  paraOneDesciption: {
    type: String,

    minLength: [5, "Blog Intro must contain at least 250 charcaters"],
  },
  paraOneTitle: {
    type: String,
    minLength: [50, "Blog Title must contain at least 50 charcaters"],
  },

  paraTwoImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  paraTwoDesciption: {
    type: String,

    minLength: [5, "Blog Intro must contain at least 250 charcaters"],
  },
  paraTwoTitle: {
    type: String,
    minLength: [50, "Blog Title must contain at least 50 charcaters"],
  },

  category: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorAvatar: {
    type: String,
    // required: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
});

export const Blog = mongoose.model("Blog", blogSchema);
