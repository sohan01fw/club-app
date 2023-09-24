import userProfile from "@/lib/Models/userprofile.model";

export async function getUserProfile(id: string) {
  try {
    const userData = await userProfile.findOne({ _id: id });
    return userData;
  } catch (error: any) {
    throw new Error("can't fetch data from db", error.message);
  }
}
