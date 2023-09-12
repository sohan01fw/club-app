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
import { Input } from "@/Components/ui/input";
import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidaton } from "@/lib/validations/UserProfile";

import Image from "next/image";
import { Textarea } from "@/Components/ui/textarea";
import { Slider } from "@/Components/ui/slider";
import { Avatar, AvatarFallback } from "@/Components/ui/avatar";

type props = {
  user: { email: string; name: string; image: string };
};
const UserForm = ({ user }: props) => {
  const form = useForm<z.infer<typeof UserValidaton>>({
    resolver: zodResolver(UserValidaton),
    defaultValues: {
      profile_pic: user.image || "",
      username: user.name || "",
      bio: "",
    },
  });
  const handleImage = (
    e: ChangeEvent,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
  };
  function onSubmit(values: z.infer<typeof UserValidaton>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="shadow-lg flex flex-col  pl-3 pr-3 mt-20 "
      >
        <FormField
          control={form.control}
          name="profile_pic"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <Avatar className="h-20 w-20">
                <FormLabel className="border grid place-items-center rounded-full overflow-hidden w-full ">
                  {field.value ? (
                    <Image
                      src={field.value}
                      alt="profile_pic"
                      width={96}
                      height={96}
                      priority
                      className="object-contain"
                    />
                  ) : (
                    <Image
                      src="/vercel.svg"
                      alt="profile_pic"
                      width={89}
                      height={89}
                      className="p-1 "
                    />
                  )}
                </FormLabel>
              </Avatar>
              <FormControl className="border ml-4 ">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="upload your photo"
                  className=" ml-6 "
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className=" h-32 mt-8">
              <FormLabel>Username</FormLabel>
              <FormControl className=" rounded-sm mt-10 ">
                <Input
                  placeholder="Enter your profile name"
                  type="text"
                  className="border   rounded-[5px] p-2  mb-4 mt-1"
                  {...field}
                />
              </FormControl>
              <FormDescription className="whitespace-nowrap">
                This is your public display name.
              </FormDescription>
              <FormMessage className="whitespace-nowrap" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className=" h-36">
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
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
          Continue
        </Button>
      </form>
    </Form>
  );
};

export default UserForm;
