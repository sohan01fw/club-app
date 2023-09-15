import AuthUser from "@/lib/Models/authuser.model";
import { StoreUser } from "@/lib/actions/AuthUser.action";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

type UserRes = {
  email: string;
  password: string;
};

export async function handlePOSTRequest(request: Request) {
  try {
    const res = await request?.json();
    const userId = uuidv4();

    if (res.email && !AuthUser.findOne({ userId })) {
      await StoreUser({ userId, email: res.email, password: res.password });
      return NextResponse.json({ message: "user created successfully" });
    }

    return NextResponse.json({ message: "User already exists" });
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
  }
}

export { handlePOSTRequest as GET, handlePOSTRequest as POST };
