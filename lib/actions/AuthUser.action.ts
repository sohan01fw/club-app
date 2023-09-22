"use server";

import AuthUser from "../Models/authuser.model";
import { ConnectToDB } from "../mongoose";

//Type def for user authentication
type Authuser = {
  email: string;
  password: string;
};
type googleAuthuser = {
  email: string;
  password: string;
};

// to store the user in database
export async function StoreUser({ email, password }: googleAuthuser) {
  ConnectToDB();
  try {
    const saveUser = new AuthUser({
      email,
      password,
    });

    const savedUser = await saveUser.save();
    return savedUser;
  } catch (error: any) {
    throw new Error("failed to authenticate user", error.message);
  }
}

//update store user when user login through credentials.
export async function updateStoreUser({ email, password }: Authuser) {
  try {
    // Use findOneAndUpdate to find the user by email and update it
    const updatedUser = await AuthUser.findOneAndUpdate(
      { email }, // Search for the user by email
      { password }, // Update the password or other fields as needed
      { new: true } // Return the updated user
    );
    return updatedUser;
  } catch (error: any) {
    throw new Error("Failed to update user", error.message);
  }
}
