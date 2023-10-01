"use client";
import { Button } from "@/Components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/Components/ui/textarea";
import { PostValidaton } from "@/lib/zodValidation/UserPost";
import { UserPost } from "@/lib/actions/UserPost.action";
import { usePathname, useRouter } from "next/navigation";

const Post = ({ userid }: { userid: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm<z.infer<typeof PostValidaton>>({
    resolver: zodResolver(PostValidaton),
    defaultValues: {
      text: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof PostValidaton>) => {
    try {
      await UserPost({
        text: values.text,
        author: userid,
        communityId: null,
        path: pathname,
      });

      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="shadow-lg flex flex-col  pl-3 pr-3 mt-20 "
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className=" h-36">
              <FormLabel>post</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell the world what's on your mind!!!"
                  className="resize-none "
                  {...field}
                />
              </FormControl>
              <FormDescription className="whitespace-nowrap">
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage className="whitespace-nowrap" />
            </FormItem>
          )}
        />
        <Button
          variant="link"
          type="submit"
          className="shadow-md transition-transform transform active:scale-95 m-10 bg-[#5271FF]"
        >
          Post
        </Button>
      </form>
    </Form>
  );
};

export default Post;
