"use server";
import { revalidatePath } from "next/cache";
import userProfile from "../Models/userprofile.model";
import { ConnectToDB } from "../mongoose";

// Type def for user profile
type userprofile = {
  userId: string;
  profile_pic: string;
  username: string;
  bio: string;
  path: string;
};

// Insert user profile and update if needed
export async function UserProfile({
  userId,
  username,
  profile_pic,
  bio,
  path,
}: userprofile): Promise<void> {
  ConnectToDB();

  try {
    await userProfile.findByIdAndUpdate(
      userId, // Pass userId as a string
      { username, profile_pic, bio, onboarded: true }, // Update the correct fields, e.g., 'username'
      { new: true, upsert: true }
    );

    if (path === "/profile") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error("Failed to create/update user profile: ", error.message);
  }
}
