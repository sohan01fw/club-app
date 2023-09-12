import { getServerSession } from "next-auth";
import { authOptions } from "./authProvider";

export default async function getSessionUser() {
  const session = await getServerSession(authOptions);
  return JSON.stringify(session, null, 2);
}
