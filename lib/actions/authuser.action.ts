"use server";

import AuthUser from "../Models/authuser.model";
import { ConnectToDB } from "../mongoose";

type user = {
  id: string;
  email: string;
  password: string;
};
// to store the user in database
export async function StoreUser({ id, email, password }: user): Promise<void> {
  ConnectToDB();

  const saveUser = new AuthUser({
    id,
    email,
    password,
  });

  await saveUser.save();
}

export async function UserProfile(): Promise<void> {
  ConnectToDB();
}
