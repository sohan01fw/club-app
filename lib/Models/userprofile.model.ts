import mongoose from "mongoose";
import { boolean, string } from "zod";

const { Schema } = mongoose;

const UserProfileSchema = new Schema({
  userId: {
    type: String,
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
  onboarded: {
    type: Boolean,
    default: false,
  },
});

const userProfile =
  mongoose.models.UserProfiles ||
  mongoose.model("UserProfiles", UserProfileSchema);

export default userProfile;
