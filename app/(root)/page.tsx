import ClubPost from "@/Components/Home-page/ClubPost";
import { useSession } from "next-auth/react";

export default async function Home() {
  /*   const { data: session } = useSession();
  console.log(session); */
  // const userPost = await fetchPost()
  return (
    <main className=" flex flex-col mt-20  sm:ml-28 md:ml-28 md:mr-5 lg:ml-40 xl:ml-40 2xl:ml-10   ">
      <div className="posts xl:ml-52 ">
        <ClubPost name="sohan" text="hey this is me" image="/faviicon.ico" />
      </div>
    </main>
  );
}
