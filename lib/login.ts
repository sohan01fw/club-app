import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

//for to login the user with email and password
interface userValue {
  email: string;
  password: string;
}
export const login = async (values: userValue) => {
  const res = await signIn("credentials", {
    email: values.email,
    password: values.password,
    redirect: false,
  });
  /* if (res?.error === "404") {
    redirect("/");
  } */
  // Check if there's an error in the response
  if (res?.error === "401") {
    // Handle the error here (e.g., display an error message)

    return { error: "wrong credentials", status: 401 };
  } else {
    // No error, user successfully logged in, you can now redirect
    // Redirect to a specific page, e.g., profile page
    useRouter().push("/profile");
  }
};
