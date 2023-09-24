import mongoose from "mongoose";

const { Schema } = mongoose;

const threadSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const userThreads =
  mongoose.models.userThreads || mongoose.model("UserProfiles", threadSchema);

export default userThreads;
