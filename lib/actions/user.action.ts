"use server";

import User from "../Models/user.model";
import { ConnectToDB } from "../mongoose";

type user = {
  id: string;
  email: string;
  password: string;
};
export async function StoreUser({
  id,
  email,
  password,
}: /*   name, */
user): Promise<void> {
  ConnectToDB();

  const saveUser = new User({
    id,
    email,

    password,
  });

  await saveUser.save();
}
