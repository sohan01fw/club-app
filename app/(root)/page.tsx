import ClubPost from "@/Components/Home-page/ClubPost";
import { fetchPosts } from "@/lib/actions/UserPost.action";

export default async function Home() {
  const result = await fetchPosts(1, 30);
  /*   console.log(result);
   */ return (
    <main className=" flex flex-col mt-20  sm:ml-28 md:ml-28 md:mr-5 lg:ml-40 xl:ml-40 2xl:ml-10   ">
      <div className="posts xl:ml-52 ">
        {result.posts.map((post) => {
          return (
            <ClubPost
              key={post._id}
              id={post._id}
              parentId={post.parentId}
              author={post.author}
              content={post.text}
              community={post.communities}
              createdAt={post.createdAt}
              comments={post.children}
            />
          );
        })}
      </div>
    </main>
  );
}
