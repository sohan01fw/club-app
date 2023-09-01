"use server";

import User from "../Models/user.model";
import { ConnectToDB } from "../mongoose";

type user = {
  email: string;
  name: string;
  password: string;
};
export async function StoreUser({
  email,
  password,
  name,
}: user): Promise<void> {
  ConnectToDB();

  const saveUser = new User({});
}
