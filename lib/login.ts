import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

//for to login the user with email and password
interface userValue {
  email: string;
  password: string;
}
export const login = async (values: userValue) => {
  const res = await signIn("credentials", {
    email: values.email,
    password: values.password,
    redirect: true,
    callbackUrl: process.env.NEXT_PUBLIC_CALLBACK_URL,
  });

  return res;
};
