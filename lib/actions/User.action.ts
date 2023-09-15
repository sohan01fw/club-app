"use server";

import AuthUser from "../Models/authuser.model";
import { ConnectToDB } from "../mongoose";

//Type def for user authentication
type Authuser = {
  userId: string;
  email: string;
  password: string;
};
//Type def for user profile

// to store the user in database
export async function StoreUser({
  userId,
  email,
  password,
}: Authuser): Promise<void> {
  ConnectToDB();

  const saveUser = new AuthUser({
    userId,
    email,
    password,
  });

  await saveUser.save();
}

//insert user proifle and update if needed
export async function UserProfile(): Promise<void> {
  ConnectToDB();
}
