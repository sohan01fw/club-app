"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);
  const User = session?.user;
  const email = User?.email;

  const GoogleUser = async () => {
    const sendData = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      GoogleUser();
    }
  }, []);

  return (
    <main className="">
      <h3 className="global-border"> Hey this is Club app!!!</h3>

      <div>
        <Link href="/signin">
          <button>LogIn</button>
        </Link>
        <button onClick={() => signOut()}>SignOut</button>
      </div>
    </main>
  );
}
