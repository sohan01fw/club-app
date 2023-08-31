"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <main className="">
      Hey this is Club app!!!
      <div>
        <Link href="/api/auth/signin">
          <button>LogIn</button>
        </Link>
        <button onClick={() => signOut()}>SignOut</button>
      </div>
    </main>
  );
}
