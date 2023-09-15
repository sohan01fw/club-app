import mongoose from "mongoose";

const { Schema } = mongoose;

const authUserSchema = new Schema(
  {
    userId: String,
    email: {
      type: String,
      required: true,
    },
    password: String,
  },
  { timestamps: true }
);

const AuthUser =
  mongoose.models.AuthUsers || mongoose.model("AuthUsers", authUserSchema);

export default AuthUser;
