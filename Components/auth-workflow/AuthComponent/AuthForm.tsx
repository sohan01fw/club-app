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
import { ToastAction } from "@/Components/ui/toast";
import { toast } from "@/Components/ui/use-toast";
import { UserAuthvalidation } from "@/lib/validations/UserAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//for default form values
const defaultFormValues = {
  email: "",
  password: "",
};

const AuthForm = () => {
  const router = useRouter();
  /* const { data: session, status } = useSession();
  console.log(session); */

  //form validation
  const form = useForm<z.infer<typeof UserAuthvalidation>>({
    resolver: zodResolver(UserAuthvalidation),
    defaultValues: defaultFormValues,
  });

  const onSubmit = async (values: z.infer<typeof UserAuthvalidation>) => {
    try {
      const resData = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      /* const session = await getSession();
      console.log(session); */

      console.log(resData);

      if (resData?.error === "401") {
        toast({
          title: "Invalid credentials",
          description: "Please signUp through credentials!!!",
        });
      } else if (resData?.error === "400" || resData?.error === "404") {
        router.push("/");
      } else {
        router.push("/profile");
      }
    } catch (error) {
      console.log("login failed", error);
    }
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
                  className="shadow-md"
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
            <FormItem className="mt-3">
              <FormLabel className="">Password</FormLabel>
              <FormControl className="">
                <Input
                  type="password"
                  className="shadow-md"
                  placeholder="password...."
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-medium text-[11px]" />
            </FormItem>
          )}
        />
        <Button
          variant="link"
          type="submit"
          className="w-full mr-4 mt-8 mb-5 transition-transform transform active:scale-95 bg-[#5271FF]"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
