"use server";
import { revalidatePath } from "next/cache";
import userProfile from "../Models/userprofile.model";
import userPosts from "../Models/userPosts.model";

type params = {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
};
export async function UserPost({ text, author, path }: params) {
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

export async function fetchPosts(pageNumber: number, pageSize: number) {
  const skipAmount = (pageNumber - 1) * pageSize;
  //fetching post that have no parents(this is used to get the top level post which doesn't have parent)
  const getPostsQuery = await userPosts
    .find({ parentId: { $in: [null, undefined] } })
    .sort({ createdAt: "desc" })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({ path: "author", model: userProfile })
    .populate({
      path: "children",
      populate: {
        path: "author",
        model: userProfile,
        select: "_id username profile_pic parentId",
      },
    });

  const totalPostCount = await userPosts.countDocuments({
    parentId: { $in: [null, undefined] },
  });

  const posts = getPostsQuery;

  const isNext = totalPostCount > skipAmount + posts.length;

  return { posts, isNext };
}

export async function fetchPostById(id: string) {
  try {
    const getPostData = await userPosts
      .findById(id)
      .populate({
        path: "author",
        model: userProfile,
        select: "_id username profile_pic",
      })
      .populate({
        path: "children",
        populate: [
          {
            path: "author",
            model: userProfile,
            select: "_id username parentId profile_pic",
          },
          {
            path: "children",
            model: userPosts,
            populate: {
              path: "author",
              model: userProfile,
              select: "_id username parentId profile_pic",
            },
          },
        ],
      })
      .exec();
    return getPostData;
  } catch (error: any) {
    throw new Error(
      "Something is wrong while fetching user comment/replies",
      error.message
    );
  }
}
