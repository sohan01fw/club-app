"use server";
import { revalidatePath } from "next/cache";
import userPosts from "../Models/userPosts.model";
import userProfile from "../Models/userprofile.model";

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
    await userProfile.findByIdAndUpdate(
      { author },
      {
        $push: { posts: createNewPost._id },
      }
    );
    revalidatePath(path);
  } catch (error: any) {
    throw new Error("Error while creating posts", error.message);
  }
}
