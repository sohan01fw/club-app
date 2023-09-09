"use client";
import ClubPost from "@/Components/Home-page/ClubPost";
import Logo from "@/Components/Home-page/TopNav";
import { ModeToggle } from "@/Components/Togglemode";
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
    <main className=" flex flex-col mt-20 w-full sm:ml-40 ">
      <div className="posts ">
        <ClubPost />
      </div>

      {/* <div>
        <Link href="/signin">
          <button>LogIn</button>
        </Link>
        <button onClick={() => signOut()}>SignOut</button>
      </div> */}
      {/* <Link href="/userprofile">
        <button>Profile</button>
      </Link> */}
      {/*  <ModeToggle /> */}
    </main>
  );
}
