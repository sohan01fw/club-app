"use server";

import AuthUser from "../Models/authuser.model";
import { ConnectToDB } from "../mongoose";

type user = {
  id: string;
  email: string;
  password: string;
};
export async function StoreUser({ id, email, password }: user): Promise<void> {
  ConnectToDB();

  const saveUser = new AuthUser({
    id,
    email,
    password,
  });

  await saveUser.save();
}
