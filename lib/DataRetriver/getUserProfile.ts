import userProfile from "@/lib/Models/userprofile.model";
import { ConnectToDB } from "@/lib/mongoose";

export async function getUserProfile(id: string) {
  await ConnectToDB();

  try {
    const userDetails = await userProfile.findOne({ _id: id });
    return userDetails;
  } catch (error: any) {
    throw new Error("can't fetch data from db", error.message);
  }
}
