import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    id: String,
    email: {
      type: String,
      required: true,
    },
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
