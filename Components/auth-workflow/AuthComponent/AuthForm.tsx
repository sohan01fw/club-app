"use client";

import { Button } from "@/Components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { UserAuthvalidation } from "@/lib/validations/UserAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
const AuthForm = () => {
  interface userValue {
    email: string;
    password: string;
  }
  const login = async (values: userValue) => {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/profile",
    });
  };
  //form validation
  const form = useForm<z.infer<typeof UserAuthvalidation>>({
    resolver: zodResolver(UserAuthvalidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof UserAuthvalidation>) => {
    login(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" ml-3 mr-4 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="JohnDoe@gmail.com"
                  className=""
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-medium text-[11px]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password...." {...field} />
              </FormControl>
              <FormMessage className="font-medium text-[11px]" />
            </FormItem>
          )}
        />
        <Button
          variant="link"
          type="submit"
          className="w-full mr-4 mt-5 mb-5 transition-transform transform active:scale-95 bg-[#5271FF]"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
