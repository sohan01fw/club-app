"use server";
import { revalidatePath } from "next/cache";
import userProfile from "../Models/userprofile.model";
import { ConnectToDB } from "../mongoose";

//Type def for user profile
type userprofile = {
  userId: string;
  profile_pic: string;
  username: string;
  bio: string;
  path: string;
};

//insert user proifle and update if needed

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
      { userId },
      { username: username.toLowerCase(), profile_pic, bio, onboarded: true },
      { upsert: true }
    );
    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error("failed to create/update user profile", error.message);
  }
}
