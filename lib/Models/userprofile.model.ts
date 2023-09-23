import mongoose from "mongoose";

const { Schema } = mongoose;

const UserProfileSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
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
