"use server";
import { revalidatePath } from "next/cache";
import userProfile from "../Models/userprofile.model";
import { ConnectToDB } from "../mongoose";
import userPosts from "../Models/userPosts.model";

type params = {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
};
export async function UserPost({ text, author, communityId, path }: params) {
  try {
    const createNewPost = await userPosts.create({
      text,
      author,
      communities: null,
    });
    try {
      // Update the user profile to include the newly created post ID.
      await userProfile.findByIdAndUpdate(
        { _id: author },
        {
          $push: { posts: createNewPost._id },
        }
      );
    } catch (error: any) {
      // Handle the error from the `findByIdAndUpdate()` operation.
      console.error(error);
      throw new Error("Error while updating user profile", error.message);
    }

    revalidatePath(path);
  } catch (error: any) {
    throw new Error("Error while creating posts", error.message);
  }
}
