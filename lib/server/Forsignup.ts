"use server";

import AuthUser from "../Models/authuser.model";
import { StoreUser, updateStoreUser } from "../actions/AuthUser.action";
import { ConnectToDB } from "../mongoose";

type Values = {
  email: "";
  password: "";
};
const Forsignup = async (email: string, password: string) => {
  await ConnectToDB();
  console.log({ email, password });
  try {
    const checkUser = await AuthUser.findOne({ email });
    if (!checkUser) {
      const storeUserData = await StoreUser({ email, password });
      const sendStoreUser = JSON.parse(JSON.stringify(storeUserData));
      return sendStoreUser;
    }
    if (checkUser?.password === "") {
      const updateUserData = await updateStoreUser({ email, password });
      const sendUpdatedUser = JSON.parse(JSON.stringify(updateUserData));
      return sendUpdatedUser;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default Forsignup;
