"use server";

import AuthUser from "../Models/authuser.model";
import { ConnectToDB } from "../mongoose";

//Type def for user authentication
type Authuser = {
  userId: string;
  email: string;
  password: string;
};

// to store the user in database
export async function StoreUser({
  userId,
  email,
  password,
}: Authuser): Promise<void> {
  ConnectToDB();
  try {
    const saveUser = new AuthUser({
      userId,
      email,
      password,
    });

    await saveUser.save();
  } catch (error: any) {
    throw new Error("failed to authenticate user", error.message);
  }
}
