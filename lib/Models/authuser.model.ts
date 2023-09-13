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

const AuthUser =
  mongoose.models.Users || mongoose.model("AuthUsers", userSchema);

export default AuthUser;
