"use client";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import Forsignup from "@/lib/server/Forsignup";
import {} from "@/lib/zodValidation/UserSignin";
import { UserSignupvalidation } from "@/lib/zodValidation/UserSignup";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//for default form values
const defaultFormValues = {
  email: "",
  password: "",
};

const Signup = () => {
  const [checkpsw, setCheckpsw] = useState(false);
  const router = useRouter();

  //form validation
  const form = useForm<z.infer<typeof UserSignupvalidation>>({
    resolver: zodResolver(UserSignupvalidation),
    defaultValues: defaultFormValues,
  });

  const onSubmit = async (values: z.infer<typeof UserSignupvalidation>) => {
    let email = values.email;
    let password = values.password;
    if (values.password !== values.Cpassword) {
      setCheckpsw(true);
    } else {
      setCheckpsw(false);
      const resValue = await Forsignup(email, password);
      if (resValue) {
        router.push("/signin");
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" ml-3 mr-4 ">
        {checkpsw ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your password doesn't matched!!!
            </AlertDescription>
          </Alert>
        ) : (
          ""
        )}

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

        <FormField
          control={form.control}
          name="Cpassword"
          render={({ field }) => (
            <FormItem className="mt-3">
              <FormLabel className="">Confirm Password</FormLabel>
              <FormControl className="">
                <Input
                  type="password"
                  className="shadow-md"
                  placeholder="confirm your password...."
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-medium text-[11px]" />
            </FormItem>
          )}
        />
        <div className="mt-10 ">
          <div className="flex items-center space-x-2 ">
            <Checkbox id="terms" className="mr-2" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </div>
        <Button
          variant="link"
          type="submit"
          className="w-full mr-4 mt-8 mb-5  transition-transform transform active:scale-95 bg-[#5271FF]"
        >
          <p className="text-white">Submit</p>
        </Button>
      </form>
    </Form>
  );
};

export default Signup;
