import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthUsers",
    required: true,
  },
  communities: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Communities",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  parentId: String,
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserPosts",
    },
  ],
});

const userPosts =
  mongoose.models.UserPosts || mongoose.model("UserPosts", postSchema);

export default userPosts;
