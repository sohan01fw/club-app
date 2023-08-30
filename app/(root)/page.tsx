import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      Hey this is Club app!!!
      <div>
        <Link href="/api/auth/signin">
          <button className="m-10">signup</button>
        </Link>
        <Link href="/api/auth/signin">
          <button>signIn</button>
        </Link>
      </div>
    </main>
  );
}
