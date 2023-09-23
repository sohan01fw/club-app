import mongoose from "mongoose";

const { Schema } = mongoose;

const authUserSchema = new Schema(
  {
    user_Id: {
      type: String,
      required: true,
    },
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
