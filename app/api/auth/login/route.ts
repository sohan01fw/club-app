import User from "@/lib/Models/user.model";
import { StoreUser } from "@/lib/actions/user.action";
import { NextResponse } from "next/server";

type UserRes = {
  email: string;
  password: string;
};
export async function handlePOSTRequest(request: Request) {
  const res = await request?.json();
  const { email, password }: UserRes = res;
  /*   console.log({ email, password });
   */ /* if (email) {
    const findEmail = await User.findOne({ email });
    if (!findEmail) {
      StoreUser({ email, password });
    }
  } */
  return NextResponse.json({ email, password });
}
export { handlePOSTRequest as GET, handlePOSTRequest as POST };
