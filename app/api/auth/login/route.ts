import User from "@/lib/Models/authuser.model";
import { StoreUser } from "@/lib/actions/authuser.action";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
type UserRes = {
  email: string;
  password: string;
};
export async function handlePOSTRequest(request: Request) {
  const res = await request?.json();
  const userId = uuidv4();
  const { email, password }: UserRes = res;
  /*   console.log({ email, password });
   */ if (email) {
    const findEmail = await User.findOne({ email });
    if (!findEmail) {
      console.log(userId);
      StoreUser({ id: userId, email: email, password: password });
    }
  }
  return NextResponse.json({ id: userId, email, password });
}
export { handlePOSTRequest as GET, handlePOSTRequest as POST };
