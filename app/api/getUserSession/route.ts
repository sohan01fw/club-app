import { authOptions } from "@/lib/authProvider";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export async function handleGetRequest(req: Request, res: Response) {}

export { handleGetRequest as GET, handleGetRequest as POST };
