"use client";
import ClubPost from "@/Components/Home-page/ClubPost";
import { useSession } from "next-auth/react";

export default function Home() {
  /*   const { data: session } = useSession();
  console.log(session); */
  return (
    <main className=" flex flex-col mt-20  sm:ml-28 md:ml-28 md:mr-5 lg:ml-40 xl:ml-40 2xl:ml-10   ">
      <div className="pagetitle  bg-white mb-8 ">
        <h2 className=" font-bold text-[30px] m-2  w-40 text-center shadow-md md:w-60 xl:ml-40">
          Home
        </h2>
      </div>
      <div className="posts xl:ml-52 ">
        <ClubPost />
        <ClubPost />
        <ClubPost />
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
