import mongoose from "mongoose";

const { Schema } = mongoose;

const UserProfileSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    profile_pic: String,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    bio: {
      type: String,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserPosts",
      },
    ],
    communities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Communities",
      },
    ],
    onboarded: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userProfile =
  mongoose.models.UserProfiles ||
  mongoose.model("UserProfiles", UserProfileSchema);

export default userProfile;
