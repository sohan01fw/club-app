import mongoose from "mongoose";
import { boolean } from "zod";

const { Schema } = mongoose;

const UserProfileSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthUsers",
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
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Communities",
    },
  ],
  onborded: {
    type: Boolean,
    default: false,
  },
});

const UserProfile =
  mongoose.models.UserProfiles ||
  mongoose.model("UserProfiles", UserProfileSchema);

export default UserProfile;
