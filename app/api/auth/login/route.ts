import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type UserRes = {
  email: string;
  password: string;
};
export async function handlePOSTRequest(request: Request) {
  const res = await request.json();
  console.log(res);
  const { email, password }: UserRes = res;
  return NextResponse.json({ email, password });
}
export { handlePOSTRequest as GET, handlePOSTRequest as POST };
