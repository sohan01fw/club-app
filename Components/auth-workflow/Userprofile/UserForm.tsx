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
import { UserValidaton } from "@/lib/validations/User";

import Image from "next/image";
import { Textarea } from "@/Components/ui/textarea";
import { Slider } from "@/Components/ui/slider";

const UserForm = () => {
  const form = useForm<z.infer<typeof UserValidaton>>({
    resolver: zodResolver(UserValidaton),
    defaultValues: {
      profile_pic: "",
      username: "",
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
        className="shadow-lg pl-3 flex flex-col pr-2 pt-2  "
      >
        <FormField
          control={form.control}
          name="profile_pic"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel className="border gird place-items-center">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile_pic"
                    width={96}
                    height={96}
                    priority
                    className=" rounded-full object-contain "
                  />
                ) : (
                  <Image
                    src="/vercel.svg"
                    alt="profile_pic"
                    width={70}
                    height={70}
                    className="rounded-full object-contain bg-red-600"
                  />
                )}
              </FormLabel>
              <FormControl className="border">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="upload your photo"
                  className=""
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
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your profile name" type="text" />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default UserForm;
