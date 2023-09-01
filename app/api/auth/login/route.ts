import { StoreUser } from "@/lib/actions/user.action";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

type UserRes = {
  email: string;
  password: string;
  AuthProvider: boolean;
};
export async function handlePOSTRequest(request: Request) {
  const res = await request.json();
  const { email, password, AuthProvider }: UserRes = res;
  console.log(AuthProvider);
  if (email) {
    StoreUser({ email, password });
  }

  return NextResponse.json({ email, password });
}
export { handlePOSTRequest as GET, handlePOSTRequest as POST };
