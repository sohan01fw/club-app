"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const User = session?.user;
  const email = User?.email;
  const password = User?.name;
  const AuthProvider = true;
  const GoogleUser = async () => {
    const sendData = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, AuthProvider }),
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      GoogleUser();
    }
  }, []);

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
